
#include <memory>
int main(int argc, char **argv) {
    auto foo = std::make_unique<int>(5);
    return 0;
}
