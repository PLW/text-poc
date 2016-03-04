
#include <atomic>

int main() {
    std::atomic<uint32_t> x;

    x.store(0);
    uint32_t y = 1;
    x.fetch_add(y);
    x.fetch_sub(y);
    x.exchange(y);
    x.compare_exchange_strong(y, x);
    return x.load();
}
