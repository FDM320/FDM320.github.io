#include <bitset>

int solution(int N) {
    // Get the string representation of N
    std::string binaryString = std::bitset<64>(N).to_string();
    int binaryGap = 0;
    int tempGap = 0;
    // Find first 1 in the string
    for (unsigned int i = binaryString.find('1'); i < binaryString.length(); i++) {
        if (binaryString[i] == '1') {
            if (tempGap > binaryGap) {
                binaryGap = tempGap;
            }
            tempGap = 0;
        }
        else if (binaryString[i] == '0') {
            tempGap += 1;
        }
    }
    return binaryGap;
}