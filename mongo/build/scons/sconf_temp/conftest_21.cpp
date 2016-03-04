
#include <boost/shared_ptr.hpp>
struct TestType { int value; bool boolValue; };
bool foo() {
    boost::shared_ptr<TestType> sp(new TestType);
    return NULL != sp;
}
