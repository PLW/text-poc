
#include <type_traits>
int main(int argc, char **argv) {
    class Trivial {
        int trivial1;
        double trivial2;
        struct {
            float trivial3;
            short trivial4;
        } trivial_member;
    };

    class NotTrivial {
        int x, y;
        NotTrivial(const NotTrivial& o) : x(o.y), y(o.x) {}
    };

    static_assert(std::is_trivially_copyable<Trivial>::value,
                  "I should be trivially copyable");
    static_assert(!std::is_trivially_copyable<NotTrivial>::value,
                  "I should not be trivially copyable");
    return 0;
}
