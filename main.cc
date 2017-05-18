#include "nan.h"
#include "named-image.h"

using namespace Nan;
using namespace v8;

namespace {


NAN_METHOD(getImagedNamed) {
  String::Utf8Value str(info[0]->ToString()); //first string arg
  Nan::MaybeLocal<v8::Object> iconBuff = NamedImage::getImagedNamed(*str);
  info.GetReturnValue().Set(iconBuff.ToLocalChecked());
}

NAN_MODULE_INIT(Init) {
   Nan::Set(
    target, New<v8::String>("getImagedNamed").ToLocalChecked(),
    GetFunction(New<v8::FunctionTemplate>(getImagedNamed)).ToLocalChecked()
  );
}

} // namespace


NODE_MODULE(NamedImage, Init)
