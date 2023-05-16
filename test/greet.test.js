describe("The greeting function", function() {

let greetUser=greetName();


    it("should  display Dumela and name of user", function(){

greetUser.setName("Kabelo");
      
        assert.equal("Dumela kabelo",greetUser.getGreetings("Setswana")); // 
        greetUser.setName("mpho");
        assert.equal("Dumela mpho",greetUser.getGreetings("Setswana")); // 
      
    });

    
    it("should  display Habari and name of user", function(){
        
        
        greetUser.setName("Drew");
              
                assert.equal("Habari drew",greetUser.getGreetings("Swahili")); // 
                greetUser.setName("Thato");
                assert.equal("Habari thato",greetUser.getGreetings("Swahili")); //    
            });
            
    it("should  display this 'please enter a valid name and language'", function(){
        
        greetUser.setName("Drew");
        greetUser.getGreetings("IsiNdebele")
        assert.equal("Please enter a valid name and  language",greetUser.getCheckError()); //    
        greetUser.getGreetings("Zulu")
              assert.equal("Please enter a valid name and  language",greetUser.getCheckError()); // 
              greetUser.getGreetings("English")
                        assert.equal("Please enter a valid name and  language",greetUser.getCheckError()); // 
                        greetUser.getGreetings("")
                        assert.equal("Please enter a valid name and  language",greetUser.getCheckError()); //
                      
        
        });
              
            
    it("should  display Akwande and name of user", function(){
        
        
        greetUser.setName("Ora");
              
                assert.equal("Akwande ora",greetUser.getGreetings("IsiNdebele")); // 
                greetUser.setName("Obakeng");
                assert.equal("Akwande obakeng",greetUser.getGreetings("IsiNdebele")); // 
              
            });

            

                    
            it("should  display number of users greeted", function(){
            
                      
                        assert.equal(6,greetUser.getCounter()); // 
                        
                             greetUser.setName("Lucia");
                                    greetUser.getGreetings("IsiNdebele")
                             assert.equal(7,greetUser.getCounter());
                      
                    });


    
    });






