enum AgeClassification {
    "Child" = 12,
    "Teenager" = 17,
    "Adult" = 64,
    "Senior" = 65,
} 
/**
 * 任務：實作一個函式 `classifyAge`，根據年齡進行分類。

*
 * 範例：
 * classifyAge(10) 應該回傳 "Child"
 * classifyAge(15) 應該回傳 "Teenager"
 * classifyAge(30) 應該回傳 "Adult"
 * classifyAge(70) 應該回傳 "Senior"
 *
 * @param age - 一個需要被分類的年齡
 * @returns - 回傳年齡的分類結果
 */

export function classifyAge(age: number): string {
    // 請在此處寫下你的程式碼
    let classifyText = ""
    switch(true){
        case  (age <= AgeClassification.Child):
            classifyText = AgeClassification[AgeClassification.Child];
            break;
        case  (age < AgeClassification.Teenager):
            classifyText = AgeClassification[AgeClassification.Teenager];
            break;
        case  (age < AgeClassification.Adult):
            classifyText = AgeClassification[AgeClassification.Adult];
            break;
        case  (age >= AgeClassification.Senior):
            classifyText = AgeClassification[AgeClassification.Senior];
            break;
    }
    return classifyText;
    
}