import java.util.HashSet;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> unique = new HashSet<Integer>();

        for (int num : nums) {
            if (unique.contains(num)){
                return true;
            }
            unique.add(num);
        }
        return false;
    }
}
