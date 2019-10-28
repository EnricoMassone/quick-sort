const quickSort = nums => {
  if (!Array.isArray(nums)) {
    throw new TypeError("Nums is expected to be an array.");
  }

  if (nums.some(item => typeof item !== "number")) {
    throw new TypeError("all items in nums must be of type number");
  }

  // recursion base case
  if (nums.length < 2) {
    return nums;
  }

  const [pivot, pivotIndex] = pickPivot(nums);

  const itemsSmallerThanPivot = [];
  const itemsGreaterThanPivot = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (nums[i] <= pivot) {
      itemsSmallerThanPivot.push(nums[i]);
    } else {
      itemsGreaterThanPivot.push(nums[i]);
    }
  }

  return [...quickSort(itemsSmallerThanPivot), pivot, ...quickSort(itemsGreaterThanPivot)];
};

const pickPivot = nums => {
  if (!Array.isArray(nums)) {
    throw new TypeError("Nums is expected to be an array.");
  }

  if (nums.length === 0) {
    throw new Error("Nums is expected to have at least one item.");
  }

  const pivotIndex = nums.length - 1;
  const pivot = nums[pivotIndex];
  return [pivot, pivotIndex];
};

module.exports = {
  quickSort
};