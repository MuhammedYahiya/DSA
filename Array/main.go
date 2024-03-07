package main

import "fmt"

func main() {
	array := arrayRepresentation()
	size := len(array)
	position := SearchElement(array, size)
	if position == -1 {
		fmt.Print("Element not found")
	} else {
		fmt.Printf("Element found at position %d", position+1)
	}

}

func arrayRepresentation() [5]int {
	// var arr [5]int
	arr1 := [5]int{1, 2, 3, 4, 5}
	// slice := []int{1, 2, 3, 4, 5, 6}
	// make := make([]int, 3, 5)
	return arr1
}

func SearchElement(arr [5]int, size int) int {
	var key int
	fmt.Println("Enter the element to find the position")
	fmt.Scanf("%d", &key)
	for i := 0; i < size; i++ {
		if arr[i] == key {
			return i
		}

	}
	return -1
}
