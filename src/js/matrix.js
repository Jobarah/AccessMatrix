export default class Matrix {
	
	constructor() {

		this.matrix = new Array();
		this.matrix.push(new Array());
	}

	addObject(object) {

		this.matrix[0].push(object);
	}

	addDomain(domain) {

		let newDomain = new Array();

		newDomain.push(domain);
		this.matrix[0].map(() => newDomain.push('-'));
		this.matrix.push(newDomain);
	}

	getDomainPermissionsForObject(domain, object) {

		const domainIndex = this.getDomainIndex(domain);
		const objectIndex = this.getObjectIndex(object);

		return this.matrix[domainIndex][objectIndex];
	}

	getDomainIndex(domain) {

		let retIndex = -1;

		this.matrix.map((item, index) => {
			if(item[0] == domain)
				retIndex = index;
		});

		return retIndex;
	}

	getObjectIndex(object) {

		let retIndex = -1;

		this.matrix[0].map((item, index) => {
			if (item == object)
				retIndex = index;
		});

		return retIndex;
	}

	printMatrix() {
		console.log(this.matrix);
	}
}