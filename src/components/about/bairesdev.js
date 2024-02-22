function sortUsers(users, order) {
	if (order !== 1 && order !== -1) {
		throw new Error("Invalid order. Use 1 for ascending or -1 for descending.");
	}

	const sortedUsers = [...users].sort((userA, userB) => {
		const nameA = userA.name.toUpperCase();
		const nameB = userB.name.toUpperCase();

		if (nameA < nameB) {
			return order;
		}
		if (nameA > nameB) {
			return -order;
		}
		return 0;
	});

	return sortedUsers;
}

// Example usage:
const users = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Alice" },
	{ id: 3, name: "Bob" },
];

const ascendingOrder = sortUsers(users, 1);
console.log("Ascending Order:", ascendingOrder);

const descendingOrder = sortUsers(users, -1);
console.log("Descending Order:", descendingOrder);

// const myUrl = "https://jsonplaceholder.typicode.com/users";

// async function fetchData(url) {
// 	try {
// 		const response = await fetch(url);

// 		// Check if the response is ok
// 		if (!response.ok) {
// 			throw new Error(`Error: ${response.status} - ${response.statusText}`);
// 		}

// 		const data = await response.json();
// 		return data;
// 	} catch (error) {
// 		throw new Error(`Error fetching data: ${error.message}`);
// 	}
// }

// // Example usage
// (async () => {
// 	try {
// 		const parsedData = await fetchData(myUrl);
// 		console.log("Parsed JSON data:", parsedData);
// 	} catch (error) {
// 		console.error(error);
// 	}
// })();
