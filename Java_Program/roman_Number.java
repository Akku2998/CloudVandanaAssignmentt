import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class RomanToInteger {

    private static final Map<Character, Integer> romanToInteger = new HashMap<>();

    static {
        romanToInteger.put('I', 1);
        romanToInteger.put('V', 5);
        romanToInteger.put('X', 10);
        romanToInteger.put('L', 50);
        romanToInteger.put('C', 100);
        romanToInteger.put('D', 500);
        romanToInteger.put('M', 1000);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine().toUpperCase();

        int result = romanToInteger(romanNumeral);
        System.out.println("The equivalent integer for " + romanNumeral + " is: " + result);
    }

    public static int romanToInteger(String s) {
        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            int currentVal = romanToInteger.get(s.charAt(i));
            int nextVal = (i + 1 < s.length()) ? romanToInteger.get(s.charAt(i + 1)) : 0;

            if (currentVal < nextVal) {
                result -= currentVal;
            } else {
                result += currentVal;
            }
        }

        return result;
    }
}
