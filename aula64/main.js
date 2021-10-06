const nums1 = [1,2,3];
const nums2 = [4,5,6];
//const nums12 = nums1.concat(nums2);
const nums12 = [...nums1, ...nums2];
console.log(nums12)