class NumArray {
    nums
    len_
    size
    chunk

    constructor(nums) {
        this.nums = nums
        const len = nums.length
        this.len_ = Math.floor(Math.sqrt(len))
        this.size = Math.ceil(len / this.len_)
        this.chunk = new Array(this.size).fill(0)

        for (let i=0; i<this.size; i++) {
            let arr = nums.slice(i*this.len_, (i+1)*this.len_)
            this.chunk[i] = arr.reduce((sum, v) => sum + v, 0)
        }
    }

    update(index, val){
        let i = Math.floor(index / this.len_)
        this.chunk[i] += val - this.nums[index]
        this.nums[index] = val
    }

    sumRange(left, right) {
        let l = Math.floor(left / this.len_)
        let r = Math.floor(right / this.len_)

        if (l === r || r - l === 1) {
            return this.sum(this.nums.slice(left, right+1))
        }

        let chunkSum = 0
        let lArr = this.nums.slice(left,(Math.floor(left / this.len_) + 1) * this.len_)
        let rArr = this.nums.slice((Math.floor(right / this.len_)) * this.len_, right+1)

        for (let i=Math.ceil(left / this.len_)+1; i<Math.floor(right / this.len_); i++) {
            chunkSum += this.chunk[i]
        }

        return this.sum(lArr) + chunkSum + this.sum(rArr)
    }

    sum(arr){
        if (arr.length === 0)   return 0
        return arr.reduce((sum, v) => sum + v, 0)
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

let obj = new NumArray([1, 3, 5])
obj.sumRange(0, 2)
obj.update(1, 2)
obj.sumRange(0, 2)