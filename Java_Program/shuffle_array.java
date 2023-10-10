import java.util.Arrays;
import java.util.Random;

public class ShuffleArray {

    public static void main(String[] args) {
        int[] originalArray = {1, 2, 3, 4, 5, 6, 7};
        int[] shuffledArray = shuffleArray(originalArray);

        System.out.println("Original array: " + Arrays.toString(originalArray));
        System.out.println("Shuffled array: " + Arrays.toString(shuffledArray));
    }

    public static int[] shuffleArray(int[] array) {
        int[] shuffledArray = array.clone();
        Random random = new Random();

        for (int i = shuffledArray.length - 1; i > 0; i--) {
            int index = random.nextInt(i + 1);

            int temp = shuffledArray[index];
            shuffledArray[index] = shuffledArray[i];
            shuffledArray[i] = temp;
        }

        return shuffledArray;
    }
}
