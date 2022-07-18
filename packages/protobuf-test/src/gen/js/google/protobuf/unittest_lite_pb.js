// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// Author: kenton@google.com (Kenton Varda)
//
// This is like unittest.proto but with optimize_for = LITE_RUNTIME.

// @generated by protoc-gen-es v0.0.8 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_lite.proto (package protobuf_unittest, syntax proto2)
/* eslint-disable */

import {proto2, protoInt64} from "@bufbuild/protobuf";
import {ImportEnumLite, ImportMessageLite} from "./unittest_import_lite_pb.js";
import {PublicImportMessageLite} from "./unittest_import_public_lite_pb.js";

/**
 * @generated from enum protobuf_unittest.ForeignEnumLite
 */
export const ForeignEnumLite = proto2.makeEnum(
  "protobuf_unittest.ForeignEnumLite",
  [
    {no: 4, name: "FOREIGN_LITE_FOO"},
    {no: 6, name: "FOREIGN_LITE_BAZ"},
    {no: 5, name: "FOREIGN_LITE_BAR"},
  ],
);

/**
 * @generated from enum protobuf_unittest.V1EnumLite
 */
export const V1EnumLite = proto2.makeEnum(
  "protobuf_unittest.V1EnumLite",
  [
    {no: 1, name: "V1_FIRST"},
  ],
);

/**
 * @generated from enum protobuf_unittest.V2EnumLite
 */
export const V2EnumLite = proto2.makeEnum(
  "protobuf_unittest.V2EnumLite",
  [
    {no: 1, name: "V2_FIRST"},
    {no: 2, name: "V2_SECOND"},
  ],
);

/**
 * Same as TestAllTypes but with the lite runtime.
 *
 * @generated from message protobuf_unittest.TestAllTypesLite
 */
export const TestAllTypesLite = proto2.makeMessageType(
  "protobuf_unittest.TestAllTypesLite",
  () => [
    { no: 1, name: "optional_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "optional_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 3, name: "optional_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 4, name: "optional_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 5, name: "optional_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, opt: true },
    { no: 6, name: "optional_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, opt: true },
    { no: 7, name: "optional_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, opt: true },
    { no: 8, name: "optional_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true },
    { no: 9, name: "optional_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, opt: true },
    { no: 10, name: "optional_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, opt: true },
    { no: 11, name: "optional_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 12, name: "optional_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 13, name: "optional_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 14, name: "optional_string", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 15, name: "optional_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 16, name: "optionalgroup", kind: "message", T: TestAllTypesLite_OptionalGroup, opt: true },
    { no: 18, name: "optional_nested_message", kind: "message", T: TestAllTypesLite_NestedMessage, opt: true },
    { no: 19, name: "optional_foreign_message", kind: "message", T: ForeignMessageLite, opt: true },
    { no: 20, name: "optional_import_message", kind: "message", T: ImportMessageLite, opt: true },
    { no: 21, name: "optional_nested_enum", kind: "enum", T: proto2.getEnumType(TestAllTypesLite_NestedEnum), opt: true },
    { no: 22, name: "optional_foreign_enum", kind: "enum", T: proto2.getEnumType(ForeignEnumLite), opt: true },
    { no: 23, name: "optional_import_enum", kind: "enum", T: proto2.getEnumType(ImportEnumLite), opt: true },
    { no: 24, name: "optional_string_piece", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 25, name: "optional_cord", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 26, name: "optional_public_import_message", kind: "message", T: PublicImportMessageLite, opt: true },
    { no: 27, name: "optional_lazy_message", kind: "message", T: TestAllTypesLite_NestedMessage, opt: true },
    { no: 31, name: "repeated_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 32, name: "repeated_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 33, name: "repeated_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
    { no: 34, name: "repeated_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 35, name: "repeated_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true },
    { no: 36, name: "repeated_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
    { no: 37, name: "repeated_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true },
    { no: 38, name: "repeated_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
    { no: 39, name: "repeated_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true },
    { no: 40, name: "repeated_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
    { no: 41, name: "repeated_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 42, name: "repeated_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 43, name: "repeated_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true },
    { no: 44, name: "repeated_string", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 45, name: "repeated_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 46, name: "repeatedgroup", kind: "message", T: TestAllTypesLite_RepeatedGroup, repeated: true },
    { no: 48, name: "repeated_nested_message", kind: "message", T: TestAllTypesLite_NestedMessage, repeated: true },
    { no: 49, name: "repeated_foreign_message", kind: "message", T: ForeignMessageLite, repeated: true },
    { no: 50, name: "repeated_import_message", kind: "message", T: ImportMessageLite, repeated: true },
    { no: 51, name: "repeated_nested_enum", kind: "enum", T: proto2.getEnumType(TestAllTypesLite_NestedEnum), repeated: true },
    { no: 52, name: "repeated_foreign_enum", kind: "enum", T: proto2.getEnumType(ForeignEnumLite), repeated: true },
    { no: 53, name: "repeated_import_enum", kind: "enum", T: proto2.getEnumType(ImportEnumLite), repeated: true },
    { no: 54, name: "repeated_string_piece", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 55, name: "repeated_cord", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 57, name: "repeated_lazy_message", kind: "message", T: TestAllTypesLite_NestedMessage, repeated: true },
    { no: 61, name: "default_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true, default: 41 },
    { no: 62, name: "default_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true, default: protoInt64.parse("42") },
    { no: 63, name: "default_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true, default: 43 },
    { no: 64, name: "default_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true, default: protoInt64.uParse("44") },
    { no: 65, name: "default_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, opt: true, default: -45 },
    { no: 66, name: "default_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, opt: true, default: protoInt64.parse("46") },
    { no: 67, name: "default_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, opt: true, default: 47 },
    { no: 68, name: "default_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true, default: protoInt64.uParse("48") },
    { no: 69, name: "default_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, opt: true, default: 49 },
    { no: 70, name: "default_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, opt: true, default: protoInt64.parse("-50") },
    { no: 71, name: "default_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true, default: 51.5 },
    { no: 72, name: "default_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true, default: 52000 },
    { no: 73, name: "default_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: true },
    { no: 74, name: "default_string", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true, default: "hello" },
    { no: 75, name: "default_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true, default: new Uint8Array([0x77, 0x6F, 0x72, 0x6C, 0x64, ]) },
    { no: 81, name: "default_nested_enum", kind: "enum", T: proto2.getEnumType(TestAllTypesLite_NestedEnum), opt: true, default: TestAllTypesLite_NestedEnum.BAR },
    { no: 82, name: "default_foreign_enum", kind: "enum", T: proto2.getEnumType(ForeignEnumLite), opt: true, default: ForeignEnumLite.FOREIGN_LITE_BAR },
    { no: 83, name: "default_import_enum", kind: "enum", T: proto2.getEnumType(ImportEnumLite), opt: true, default: ImportEnumLite.IMPORT_LITE_BAR },
    { no: 84, name: "default_string_piece", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true, default: "abc" },
    { no: 85, name: "default_cord", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true, default: "123" },
    { no: 111, name: "oneof_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "oneof_field" },
    { no: 112, name: "oneof_nested_message", kind: "message", T: TestAllTypesLite_NestedMessage, oneof: "oneof_field" },
    { no: 113, name: "oneof_string", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "oneof_field" },
    { no: 114, name: "oneof_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "oneof_field" },
    { no: 115, name: "oneof_lazy_nested_message", kind: "message", T: TestAllTypesLite_NestedMessage, oneof: "oneof_field" },
    { no: 117, name: "oneof_nested_message2", kind: "message", T: TestAllTypesLite_NestedMessage2, oneof: "oneof_field" },
    { no: 116, name: "deceptively_named_list", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * @generated from enum protobuf_unittest.TestAllTypesLite.NestedEnum
 */
export const TestAllTypesLite_NestedEnum = proto2.makeEnum(
  "protobuf_unittest.TestAllTypesLite.NestedEnum",
  [
    {no: 1, name: "FOO"},
    {no: 2, name: "BAR"},
    {no: 3, name: "BAZ"},
  ],
);

/**
 * @generated from message protobuf_unittest.TestAllTypesLite.NestedMessage
 */
export const TestAllTypesLite_NestedMessage = proto2.makeMessageType(
  "protobuf_unittest.TestAllTypesLite.NestedMessage",
  () => [
    { no: 1, name: "bb", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "cc", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
  ],
  {localName: "TestAllTypesLite_NestedMessage"},
);

/**
 * @generated from message protobuf_unittest.TestAllTypesLite.NestedMessage2
 */
export const TestAllTypesLite_NestedMessage2 = proto2.makeMessageType(
  "protobuf_unittest.TestAllTypesLite.NestedMessage2",
  () => [
    { no: 1, name: "dd", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
  {localName: "TestAllTypesLite_NestedMessage2"},
);

/**
 * @generated from message protobuf_unittest.TestAllTypesLite.OptionalGroup
 */
export const TestAllTypesLite_OptionalGroup = proto2.makeMessageType(
  "protobuf_unittest.TestAllTypesLite.OptionalGroup",
  () => [
    { no: 17, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
  {localName: "TestAllTypesLite_OptionalGroup"},
);

/**
 * @generated from message protobuf_unittest.TestAllTypesLite.RepeatedGroup
 */
export const TestAllTypesLite_RepeatedGroup = proto2.makeMessageType(
  "protobuf_unittest.TestAllTypesLite.RepeatedGroup",
  () => [
    { no: 47, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
  {localName: "TestAllTypesLite_RepeatedGroup"},
);

/**
 * @generated from message protobuf_unittest.ForeignMessageLite
 */
export const ForeignMessageLite = proto2.makeMessageType(
  "protobuf_unittest.ForeignMessageLite",
  () => [
    { no: 1, name: "c", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * @generated from message protobuf_unittest.TestPackedTypesLite
 */
export const TestPackedTypesLite = proto2.makeMessageType(
  "protobuf_unittest.TestPackedTypesLite",
  () => [
    { no: 90, name: "packed_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true, packed: true },
    { no: 91, name: "packed_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true, packed: true },
    { no: 92, name: "packed_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true, packed: true },
    { no: 93, name: "packed_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true, packed: true },
    { no: 94, name: "packed_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true, packed: true },
    { no: 95, name: "packed_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true, packed: true },
    { no: 96, name: "packed_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true, packed: true },
    { no: 97, name: "packed_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true, packed: true },
    { no: 98, name: "packed_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true, packed: true },
    { no: 99, name: "packed_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true, packed: true },
    { no: 100, name: "packed_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true, packed: true },
    { no: 101, name: "packed_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true, packed: true },
    { no: 102, name: "packed_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true, packed: true },
    { no: 103, name: "packed_enum", kind: "enum", T: proto2.getEnumType(ForeignEnumLite), repeated: true, packed: true },
  ],
);

/**
 * @generated from message protobuf_unittest.TestAllExtensionsLite
 */
export const TestAllExtensionsLite = proto2.makeMessageType(
  "protobuf_unittest.TestAllExtensionsLite",
  [],
);

/**
 * @generated from message protobuf_unittest.OptionalGroup_extension_lite
 */
export const OptionalGroup_extension_lite = proto2.makeMessageType(
  "protobuf_unittest.OptionalGroup_extension_lite",
  () => [
    { no: 17, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * @generated from message protobuf_unittest.RepeatedGroup_extension_lite
 */
export const RepeatedGroup_extension_lite = proto2.makeMessageType(
  "protobuf_unittest.RepeatedGroup_extension_lite",
  () => [
    { no: 47, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * @generated from message protobuf_unittest.TestPackedExtensionsLite
 */
export const TestPackedExtensionsLite = proto2.makeMessageType(
  "protobuf_unittest.TestPackedExtensionsLite",
  [],
);

/**
 * @generated from message protobuf_unittest.TestNestedExtensionLite
 */
export const TestNestedExtensionLite = proto2.makeMessageType(
  "protobuf_unittest.TestNestedExtensionLite",
  [],
);

/**
 * Test that deprecated fields work.  We only verify that they compile (at one
 * point this failed).
 *
 * @generated from message protobuf_unittest.TestDeprecatedLite
 */
export const TestDeprecatedLite = proto2.makeMessageType(
  "protobuf_unittest.TestDeprecatedLite",
  () => [
    { no: 1, name: "deprecated_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "deprecated_field2", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "deprecated_field3", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "deprecated_field4", kind: "message", T: TestDeprecatedLite, opt: true },
  ],
);

/**
 * See the comments of the same type in unittest.proto.
 *
 * @generated from message protobuf_unittest.TestParsingMergeLite
 */
export const TestParsingMergeLite = proto2.makeMessageType(
  "protobuf_unittest.TestParsingMergeLite",
  () => [
    { no: 1, name: "required_all_types", kind: "message", T: TestAllTypesLite },
    { no: 2, name: "optional_all_types", kind: "message", T: TestAllTypesLite, opt: true },
    { no: 3, name: "repeated_all_types", kind: "message", T: TestAllTypesLite, repeated: true },
    { no: 10, name: "optionalgroup", kind: "message", T: TestParsingMergeLite_OptionalGroup, opt: true },
    { no: 20, name: "repeatedgroup", kind: "message", T: TestParsingMergeLite_RepeatedGroup, repeated: true },
  ],
);

/**
 * @generated from message protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator
 */
export const TestParsingMergeLite_RepeatedFieldsGenerator = proto2.makeMessageType(
  "protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator",
  () => [
    { no: 1, name: "field1", kind: "message", T: TestAllTypesLite, repeated: true },
    { no: 2, name: "field2", kind: "message", T: TestAllTypesLite, repeated: true },
    { no: 3, name: "field3", kind: "message", T: TestAllTypesLite, repeated: true },
    { no: 10, name: "group1", kind: "message", T: TestParsingMergeLite_RepeatedFieldsGenerator_Group1, repeated: true },
    { no: 20, name: "group2", kind: "message", T: TestParsingMergeLite_RepeatedFieldsGenerator_Group2, repeated: true },
    { no: 1000, name: "ext1", kind: "message", T: TestAllTypesLite, repeated: true },
    { no: 1001, name: "ext2", kind: "message", T: TestAllTypesLite, repeated: true },
  ],
  {localName: "TestParsingMergeLite_RepeatedFieldsGenerator"},
);

/**
 * @generated from message protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1
 */
export const TestParsingMergeLite_RepeatedFieldsGenerator_Group1 = proto2.makeMessageType(
  "protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group1",
  () => [
    { no: 11, name: "field1", kind: "message", T: TestAllTypesLite, opt: true },
  ],
  {localName: "TestParsingMergeLite_RepeatedFieldsGenerator_Group1"},
);

/**
 * @generated from message protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2
 */
export const TestParsingMergeLite_RepeatedFieldsGenerator_Group2 = proto2.makeMessageType(
  "protobuf_unittest.TestParsingMergeLite.RepeatedFieldsGenerator.Group2",
  () => [
    { no: 21, name: "field1", kind: "message", T: TestAllTypesLite, opt: true },
  ],
  {localName: "TestParsingMergeLite_RepeatedFieldsGenerator_Group2"},
);

/**
 * @generated from message protobuf_unittest.TestParsingMergeLite.OptionalGroup
 */
export const TestParsingMergeLite_OptionalGroup = proto2.makeMessageType(
  "protobuf_unittest.TestParsingMergeLite.OptionalGroup",
  () => [
    { no: 11, name: "optional_group_all_types", kind: "message", T: TestAllTypesLite, opt: true },
  ],
  {localName: "TestParsingMergeLite_OptionalGroup"},
);

/**
 * @generated from message protobuf_unittest.TestParsingMergeLite.RepeatedGroup
 */
export const TestParsingMergeLite_RepeatedGroup = proto2.makeMessageType(
  "protobuf_unittest.TestParsingMergeLite.RepeatedGroup",
  () => [
    { no: 21, name: "repeated_group_all_types", kind: "message", T: TestAllTypesLite, opt: true },
  ],
  {localName: "TestParsingMergeLite_RepeatedGroup"},
);

/**
 * Test that the correct exception is thrown by parseFrom in a corner case
 * involving merging, extensions, and required fields.
 *
 * @generated from message protobuf_unittest.TestMergeExceptionLite
 */
export const TestMergeExceptionLite = proto2.makeMessageType(
  "protobuf_unittest.TestMergeExceptionLite",
  () => [
    { no: 1, name: "all_extensions", kind: "message", T: TestAllExtensionsLite, opt: true },
  ],
);

/**
 * TestEmptyMessageLite is used to test unknown fields support in lite mode.
 *
 * @generated from message protobuf_unittest.TestEmptyMessageLite
 */
export const TestEmptyMessageLite = proto2.makeMessageType(
  "protobuf_unittest.TestEmptyMessageLite",
  [],
);

/**
 * Like above, but declare all field numbers as potential extensions.  No
 * actual extensions should ever be defined for this type.
 *
 * @generated from message protobuf_unittest.TestEmptyMessageWithExtensionsLite
 */
export const TestEmptyMessageWithExtensionsLite = proto2.makeMessageType(
  "protobuf_unittest.TestEmptyMessageWithExtensionsLite",
  [],
);

/**
 * @generated from message protobuf_unittest.V1MessageLite
 */
export const V1MessageLite = proto2.makeMessageType(
  "protobuf_unittest.V1MessageLite",
  () => [
    { no: 1, name: "int_field", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "enum_field", kind: "enum", T: proto2.getEnumType(V1EnumLite), opt: true, default: V1EnumLite.V1_FIRST },
  ],
);

/**
 * @generated from message protobuf_unittest.V2MessageLite
 */
export const V2MessageLite = proto2.makeMessageType(
  "protobuf_unittest.V2MessageLite",
  () => [
    { no: 1, name: "int_field", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "enum_field", kind: "enum", T: proto2.getEnumType(V2EnumLite), opt: true, default: V2EnumLite.V2_FIRST },
  ],
);

/**
 * @generated from message protobuf_unittest.TestHugeFieldNumbersLite
 */
export const TestHugeFieldNumbersLite = proto2.makeMessageType(
  "protobuf_unittest.TestHugeFieldNumbersLite",
  () => [
    { no: 536870000, name: "optional_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 536870001, name: "fixed_32", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 536870002, name: "repeated_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 536870003, name: "packed_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true, packed: true },
    { no: 536870004, name: "optional_enum", kind: "enum", T: proto2.getEnumType(ForeignEnumLite), opt: true },
    { no: 536870005, name: "optional_string", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 536870006, name: "optional_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 536870007, name: "optional_message", kind: "message", T: ForeignMessageLite, opt: true },
    { no: 536870008, name: "optionalgroup", kind: "message", T: TestHugeFieldNumbersLite_OptionalGroup, opt: true },
    { no: 536870010, name: "string_string_map", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 536870011, name: "oneof_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "oneof_field" },
    { no: 536870012, name: "oneof_test_all_types", kind: "message", T: TestAllTypesLite, oneof: "oneof_field" },
    { no: 536870013, name: "oneof_string", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "oneof_field" },
    { no: 536870014, name: "oneof_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "oneof_field" },
  ],
);

/**
 * @generated from message protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup
 */
export const TestHugeFieldNumbersLite_OptionalGroup = proto2.makeMessageType(
  "protobuf_unittest.TestHugeFieldNumbersLite.OptionalGroup",
  () => [
    { no: 536870009, name: "group_a", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
  {localName: "TestHugeFieldNumbersLite_OptionalGroup"},
);

/**
 * @generated from message protobuf_unittest.TestOneofParsingLite
 */
export const TestOneofParsingLite = proto2.makeMessageType(
  "protobuf_unittest.TestOneofParsingLite",
  () => [
    { no: 1, name: "oneof_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "oneof_field" },
    { no: 2, name: "oneof_submessage", kind: "message", T: TestAllTypesLite, oneof: "oneof_field" },
    { no: 3, name: "oneof_string", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "oneof_field" },
    { no: 4, name: "oneof_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, default: new Uint8Array([0x64, 0x65, 0x66, 0x61, 0x75, 0x6C, 0x74, 0x20, 0x62, 0x79, 0x74, 0x65, 0x73, ]), oneof: "oneof_field" },
    { no: 5, name: "oneof_string_cord", kind: "scalar", T: 9 /* ScalarType.STRING */, default: "default Cord", oneof: "oneof_field" },
    { no: 6, name: "oneof_bytes_cord", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "oneof_field" },
    { no: 7, name: "oneof_string_string_piece", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "oneof_field" },
    { no: 8, name: "oneof_bytes_string_piece", kind: "scalar", T: 12 /* ScalarType.BYTES */, default: new Uint8Array([0x64, 0x65, 0x66, 0x61, 0x75, 0x6C, 0x74, 0x20, 0x53, 0x74, 0x72, 0x69, 0x6E, 0x67, 0x50, 0x69, 0x65, 0x63, 0x65, ]), oneof: "oneof_field" },
    { no: 9, name: "oneof_enum", kind: "enum", T: proto2.getEnumType(V2EnumLite), oneof: "oneof_field" },
  ],
);

/**
 * @generated from message protobuf_unittest.TestMessageSetLite
 */
export const TestMessageSetLite = proto2.makeMessageType(
  "protobuf_unittest.TestMessageSetLite",
  [],
);

/**
 * The following four messages are set up to test for wire compatibility between
 * packed and non-packed repeated fields. We use the field number 2048, because
 * that is large enough to require a 3-byte varint for the tag.
 *
 * @generated from message protobuf_unittest.PackedInt32
 */
export const PackedInt32 = proto2.makeMessageType(
  "protobuf_unittest.PackedInt32",
  () => [
    { no: 2048, name: "repeated_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true, packed: true },
  ],
);

/**
 * @generated from message protobuf_unittest.NonPackedInt32
 */
export const NonPackedInt32 = proto2.makeMessageType(
  "protobuf_unittest.NonPackedInt32",
  () => [
    { no: 2048, name: "repeated_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
  ],
);

/**
 * @generated from message protobuf_unittest.PackedFixed32
 */
export const PackedFixed32 = proto2.makeMessageType(
  "protobuf_unittest.PackedFixed32",
  () => [
    { no: 2048, name: "repeated_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true, packed: true },
  ],
);

/**
 * @generated from message protobuf_unittest.NonPackedFixed32
 */
export const NonPackedFixed32 = proto2.makeMessageType(
  "protobuf_unittest.NonPackedFixed32",
  () => [
    { no: 2048, name: "repeated_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true },
  ],
);

/**
 * Test an enum that has multiple values with the same number.
 *
 * @generated from message protobuf_unittest.DupEnum
 */
export const DupEnum = proto2.makeMessageType(
  "protobuf_unittest.DupEnum",
  [],
);

/**
 * @generated from enum protobuf_unittest.DupEnum.TestEnumWithDupValueLite
 */
export const DupEnum_TestEnumWithDupValueLite = proto2.makeEnum(
  "protobuf_unittest.DupEnum.TestEnumWithDupValueLite",
  [
    {no: 1, name: "FOO1"},
    {no: 2, name: "BAR1"},
    {no: 3, name: "BAZ"},
    {no: 1, name: "FOO2"},
    {no: 2, name: "BAR2"},
  ],
);

/**
 * @generated from message protobuf_unittest.RecursiveMessage
 */
export const RecursiveMessage = proto2.makeMessageType(
  "protobuf_unittest.RecursiveMessage",
  () => [
    { no: 1, name: "recurse", kind: "message", T: RecursiveMessage, opt: true },
    { no: 2, name: "payload", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
  ],
);

