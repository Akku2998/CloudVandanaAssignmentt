import java.util.Arrays;

public class CustomShuffleArray {
    public static void main(String[] args) {
        int[] originalArray = {1, 2, 3, 4, 5, 6, 7};
        int[] shuffledArray = customShuffleArray(originalArray);

        System.out.println("Original array: " + Arrays.toString(originalArray));
        System.out.println("Shuffled array: " + Arrays.toString(shuffledArray));
    }

    public static int[] customShuffleArray(int[] array) {
        int[] shuffledArray = array.clone();
        customRandomizeArray(shuffledArray);

        return shuffledArray;
    }

    public static void customRandomizeArray(int[] array) {
        int n = array.length;
        for (int i = n - 1; i > 0; i--) {
            int j = customRandom(i + 1); 
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    public static int customRandom(int n) {
        return (int) (System.currentTimeMillis() % n);
    }
}
