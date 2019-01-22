int solution(vector<int> &A) {
    int answer = 0;
    
    for (int i = 0; i < A.size(); i++) {
        answer = answer ^ A[i];
    }
    
    return answer;
    
}