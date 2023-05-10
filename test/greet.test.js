describe("The greeting function", function() {

    it("should  display Dumela and name of user", function(){

var greetUser=greetName();
greetUser.setName("Kabelo");
      
        assert.equal("Dumela Kabelo",greetUser.getGreetings("Setswana")); // 
        greetUser.setName("Mpho");
        assert.equal("Dumela Mpho",greetUser.getGreetings("Setswana")); // 
      
    });

    
    it("should  display Habari and name of user", function(){
        
        var greetUser=greetName();
        greetUser.setName("Drew");
              
                assert.equal("Habari Drew",greetUser.getGreetings("Swahili")); // 
                greetUser.setName("Thato");
                assert.equal("Habari Thato",greetUser.getGreetings("Swahili")); //    
            });

            
    it("should  display Akwande and name of user", function(){
        
        var greetUser=greetName();
        greetUser.setName("Ora");
              
                assert.equal("Akwande Ora",greetUser.getGreetings("IsiNdebele")); // 
                greetUser.setName("Obakeng");
                assert.equal("Akwande Obakeng",greetUser.getGreetings("IsiNdebele")); // 
              
            });

            it("should  display 'Please choose valid name or language'", function(){
        
                var greetUser=greetName();
                greetUser.setName("Ora");
                      
                        assert.equal("Enter valid name or language",greetUser.getGreetings("Zulu")); // 
                        assert.equal("Enter valid name or language",greetUser.getGreetings("English")); // 
                        
                        assert.equal("Enter valid name or language",greetUser.getGreetings("")); //
                      
                    });
    
    });






