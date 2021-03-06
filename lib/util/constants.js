﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

exports.Constants = {
  constraints: ['minLength', 'maxLength', 'minimum', 'maximum', 'enum', 'maxItems', 'minItems', 'uniqueItems', 'multipleOf', 'pattern'],
  xmsExamples: 'x-ms-examples',
  exampleInSpec: 'example-in-spec',
  BodyParameterValid: 'BODY_PARAMAETER_VALID',
  ErrorCodes: {
    InternalError: 'INTERNAL_ERROR',
    RefNotFoundError: 'REF_NOTFOUND_ERROR',
    JsonParsingError: 'JSON_PARSING_ERROR',
    XmsExampleNotFoundError: 'X-MS-EXAMPLE_NOTFOUND_ERROR',
    ResponseBodyValidationError: 'RESPONSE_BODY_VALIDATION_ERROR',
    RequiredParameterNotInExampleError: 'REQUIRED_PARAMETER_NOT_IN_EXAMPLE_ERROR',
    BodyParameterValidationError: 'BODY_PARAMETER_VALIDATION_ERROR',
    TypeValidationError: 'TYPE_VALIDATION_ERROR',
    ConstraintValidationError: 'CONSTRAINT_VALIDATION_ERROR',
    StatuscodeNotInExampleError: 'STATUS_CODE_NOT_IN_EXAMPLE_ERROR'
  }
};

exports : module.exports;