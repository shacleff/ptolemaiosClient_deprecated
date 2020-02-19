#!/usr/bin/python
# -*- coding: UTF-8 -*-

import os
import sys
import re
import shutil

# change path
protobufPath = os.path.dirname(__file__)
os.chdir(protobufPath)
print("cd " + protobufPath)

# clean create
if os.path.isdir("create"):
    shutil.rmtree("create")
os.mkdir("create")

# traversal all *.proto
protoFiles = os.listdir("proto")
protoInfoList = []
for pb in protoFiles:
    if pb.endswith(".meta"):
        continue
    # create js
    filename = os.path.splitext(pb)[0]
    os.system("pbjs -t static-module -w commonjs -o create/" +
              filename + ".js proto/"+filename+".proto")
    os.system("pbts -o create/" + filename +
              ".d.ts create/" + filename + ".js")
    # fix require
    js = open("create/" + filename + ".js", "r", encoding="utf8")
    jsLines = js.readlines()
    js.close()
    js = open("create/" + filename + ".js", "w", encoding="utf8")
    jsLines[3] = "var $protobuf = protobuf;\n"
    js.writelines(jsLines)
    js.close()
    print("create " + filename)
    # get proto info
    if(filename == "pb_warp"):
        continue
    proto = open("proto/" + pb, "r", encoding="utf8")
    protoBody = proto.read()
    sPattern = re.compile("s[1-9][0-9]*")
    sProto = re.findall(sPattern, protoBody)
    protoInfoList.append([filename, sProto])
    proto.close()

# create pb.ts
pbHead = ""
pbBody = ""
for protoInfo in protoInfoList:
    protoFile = protoInfo[0]
    protoList = protoInfo[1]
    pbHead += "import * as " + protoFile + " from \"./" + protoFile + "\"\n"
    for proto in protoList:
        proto = proto[1:]
        pbBody += "      Pb.decodeIndex[" + proto +\
            "] = " + protoFile + ".s" + proto + ";\n"

pb = open("create/pb.ts", "w", encoding="utf8")
pb.writelines([pbHead,
               "export default class Pb {\n  static decodeIndex;\n  public static getDecode(proto: number) {\n    if (Pb.decodeIndex == undefined) {\n      Pb.decodeIndex = new Object();\n",
               pbBody,
               "    }\n    return Pb.decodeIndex[proto]\n  }\n}"
               ])
print("create pb.ts")
