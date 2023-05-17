describe("The greeting function", function() {

let greetUser=greetName();
greetUser.resetValues();


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
            
   
                
                    it("should  display this 'Please enter a valid langauge'", function(){
                    	
        greetUser.setName("Lucas");
        greetUser.getGreetings("")
              assert.equal("Please enter a valid language",greetUser.getCheckError()); // 
                     greetUser.setName("Loui");
              greetUser.getGreetings("")
                        assert.equal("Please enter a valid language",greetUser.getCheckError()); // 
                        
                        });
                        
                           it("should  display this 'Please enter a valid name", function(){
                           	
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

            

                    
            it("should  display number of users greeted", function(){
            
                      
                        assert.equal(6,greetUser.getCounter()); // 
                        
                             greetUser.setName("Lucia");
                                    greetUser.getGreetings("IsiNdebele")
                             assert.equal(7,greetUser.getCounter());
                      
                    });

             
                    it("should  not increment the count variable when the user has already been greeted", function(){
            
                   
                        
                             greetUser.setName("Lucia");
                                    greetUser.getGreetings("Setswana");
                             assert.equal(7,greetUser.getCounter());
                      
                    });
    
    });






