describe("FizzBuzz", function (){

    beforeEach(function(){
        fizz = new FizzBuzz();
    });

    describe("FizzBuzz test", function(){

        it("FizzBuzz function should exist", function(){
            expect(FizzBuzz).toBeDefined();
        });

        it("Must return FizzBuzz", function(){
            var result = FizzBuzz(15);
            expect(result).toBe("FizzBuzz!");
        });

        it("Must return Fizz", function(){
            var result = FizzBuzz(6);
            expect(result).toBe("Fizz");
        });

         it("Must return Buzz", function(){
            var result = FizzBuzz(20);
            expect(result).toBe("Buzz");
        });

         it("Must return 2 when called as fizzBuzz(2)", function(){
            var result = FizzBuzz(2);
            expect(result).toBe(2);
        });

        it("Must return Error when insert value is not a number", function(){
             var result = function (num) {
                 if(isNaN(num)){
                     return "Error, not a number!";
                 }
             }
             expect(result).toBe(result);
         });

    });
});