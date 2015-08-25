angular.module('app', []) 
.controller("FormCCRUD", [function() {
	var vm = this;
	vm.user = {};
	vm.register = function() {
		console.log(vm.user);
	}
}])

//CRUD 
.controller('OtherController', [function() {
	var vm = this;
	vm.newCar = "";
	vm.cars = [];
	vm.editing = false;
	vm.editCar = {};
	vm.create = function() {
		vm.cars.push(vm.newCar);
		vm.newCar = "";
	}
	
	vm.startEdit = function(index) {
		vm.editing = true;
		vm.editCar.place = index;
		vm.editCar.name = vm.cars[index];
	}

	vm.submitEdit = function(car) {
		vm.cars[vm.editCar.place] = vm.editCar.name;
		vm.editing = false;
	}

	vm.exp = function() {
		if((1+1) === 2) {
			return true;
		}
		else {
			return false;
		}
		//ng-if REMOVES it from the DOM tree, not hides it
	}
}]);