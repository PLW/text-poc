
thread_local int tsp_int = 1;
int main(int argc, char** argv) {
    return !(tsp_int == argc);
}
