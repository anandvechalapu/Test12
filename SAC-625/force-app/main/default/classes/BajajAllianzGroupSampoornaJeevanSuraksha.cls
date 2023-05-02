public class BajajAllianzGroupSampoornaJeevanSuraksha {
    //Define minimum and maximum sum assured, minimum and maximum age limits
    private int minSumAssured = 50000;
    private int maxSumAssured = 200000;
    private int minAge = 18;
    private int maxAge = 65;
    private int minIncome = 40000;

    //Method to validate sum assured
    public boolean validateSumAssured(int sumAssured) {
        if(sumAssured >= minSumAssured && sumAssured <= maxSumAssured)
            return true;
        else
            return false;
    }

    //Method to validate age
    public boolean validateAge(int age) {
        if(age >= minAge && age <= maxAge)
            return true;
        else
            return false;
    }

    //Method to validate income
    public boolean validateIncome(int income) {
        if(income >= minIncome)
            return true;
        else
            return false;
    }

    //Method to display policy tenure ranges
    public void displayPolicyTenures() {
        System.out.println("Sum Assured Ranges - 50K, 1 lac, 1.5 lac, and 2 lac");
        System.out.println("Policy Tenure Ranges - 12, 15, 18, and 24 months");
    }

    //Method to validate eligibility of member for insurance coverage
    public boolean validateEligibility(int age, int income, int sumAssured) {
        if(validateAge(age) && validateIncome(income) && validateSumAssured(sumAssured))
            return true;
        else
            return false;
    }

    //Method to validate OTP authentication
    public boolean validateOTP(String OTP) {
        if(OTP != null && !OTP.isEmpty())
            return true;
        else
            return false;
    }
}