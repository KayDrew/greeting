describe("The greeting function", function() {

let greetUser=greetName();


    it("should  display Dumela and name of user", function(){

greetUser.setName("Kabelo");
      
        assert.equal("Dumela Kabelo",greetUser.getGreetings("Setswana")); // 
        greetUser.setName("mpho");
        assert.equal("Dumela mpho",greetUser.getGreetings("Setswana")); // 
      
    });

    
    it("should  display Habari and name of user", function(){
        
        
        greetUser.setName("Drew");
              
                assert.equal("Habari Drew",greetUser.getGreetings("Swahili")); // 
                greetUser.setName("Thato");
                assert.equal("Habari Thato",greetUser.getGreetings("Swahili")); //    
            });
            
   
                
                    it("should  display this 'Please select a langauge", function(){
                    	
        greetUser.setName("Lucas");
        greetUser.getGreetings("")
              assert.equal("Please select a language",greetUser.getCheckError()); // 
                     greetUser.setName("Loui");
              greetUser.getGreetings("")
                        assert.equal("Please select a language",greetUser.getCheckError()); // 
                        
                        });
                        
                           it("should  display this 'Please enter a valid name'", function(){
                           	
               greetUser.setName("Ste45");
                        greetUser.getGreetings("IsiNdebele");
                        assert.equal("Please enter a valid name",greetUser.getCheckError()); //
                      
        
        });
              
            
    it("should  display Akwande and name of user", function(){
        
        
        greetUser.setName("Ora");
              
                assert.equal("Akwande Ora",greetUser.getGreetings("IsiNdebele")); // 
                greetUser.setName("Obakeng");
                assert.equal("Akwande Obakeng",greetUser.getGreetings("IsiNdebele")); // 
              
            });

            

      
    });






