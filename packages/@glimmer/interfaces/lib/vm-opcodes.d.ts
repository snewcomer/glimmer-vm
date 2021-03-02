/* This file is generated by build/debug.js */

export const enum MachineOp {
  PushFrame = 0,
  PopFrame = 1,
  InvokeVirtual = 2,
  InvokeStatic = 3,
  Jump = 4,
  Return = 5,
  ReturnTo = 6,
  Size = 7,
}

export const enum Op {
  Helper = 16,
  SetNamedVariables = 17,
  SetBlocks = 18,
  SetVariable = 19,
  SetBlock = 20,
  GetVariable = 21,
  GetProperty = 22,
  GetBlock = 23,
  SpreadBlock = 24,
  HasBlock = 25,
  HasBlockParams = 26,
  Concat = 27,
  Constant = 28,
  ConstantReference = 29,
  Primitive = 30,
  PrimitiveReference = 31,
  ReifyU32 = 32,
  Dup = 33,
  Pop = 34,
  Load = 35,
  Fetch = 36,
  RootScope = 37,
  VirtualRootScope = 38,
  ChildScope = 39,
  PopScope = 40,
  Text = 41,
  Comment = 42,
  AppendHTML = 43,
  AppendSafeHTML = 44,
  AppendDocumentFragment = 45,
  AppendNode = 46,
  AppendText = 47,
  OpenElement = 48,
  OpenDynamicElement = 49,
  PushRemoteElement = 50,
  StaticAttr = 51,
  DynamicAttr = 52,
  ComponentAttr = 53,
  FlushElement = 54,
  CloseElement = 55,
  PopRemoteElement = 56,
  Modifier = 57,
  BindDynamicScope = 58,
  PushDynamicScope = 59,
  PopDynamicScope = 60,
  CompileBlock = 61,
  PushBlockScope = 62,
  PushSymbolTable = 63,
  InvokeYield = 64,
  JumpIf = 65,
  JumpUnless = 66,
  JumpEq = 67,
  AssertSame = 68,
  Enter = 69,
  Exit = 70,
  ToBoolean = 71,
  EnterList = 72,
  ExitList = 73,
  Iterate = 74,
  Main = 75,
  ContentType = 76,
  Curry = 77,
  PushComponentDefinition = 78,
  PushDynamicComponentInstance = 79,
  ResolveDynamicComponent = 80,
  ResolveCurriedComponent = 81,
  PushArgs = 82,
  PushEmptyArgs = 83,
  PopArgs = 84,
  PrepareArgs = 85,
  CaptureArgs = 86,
  CreateComponent = 87,
  RegisterComponentDestructor = 88,
  PutComponentOperations = 89,
  GetComponentSelf = 90,
  GetComponentTagName = 91,
  GetComponentLayout = 92,
  BindEvalScope = 93,
  SetupForEval = 94,
  PopulateLayout = 95,
  InvokeComponentLayout = 96,
  BeginComponentTransaction = 97,
  CommitComponentTransaction = 98,
  DidCreateElement = 99,
  DidRenderLayout = 100,
  InvokePartial = 101,
  ResolveMaybeLocal = 102,
  Debugger = 103,
  Size = 104,
  StaticComponentAttr = 105,
  DynamicContentType = 106,
  DynamicHelper = 107,
  DynamicModifier = 108,
  IfInline = 109,
  Not = 110,
  GetDynamicVar = 111,
  Log = 112,
  Equal = 113,
  NotEqual = 114,
  Less = 115,
  LessEqual = 116,
  Greater = 117,
  GreaterEqual = 118,
}
