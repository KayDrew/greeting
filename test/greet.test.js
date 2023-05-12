describe("The greeting function", function() {

let greetUser=greetName();


    it("should  display Dumela and name of user", function(){

greetUser.setName("Kabelo");
      
        assert.equal("Dumela Kabelo",greetUser.getGreetings("Setswana")); // 
        greetUser.setName("Mpho");
        assert.equal("Dumela Mpho",greetUser.getGreetings("Setswana")); // 
      
    });

    
    it("should  display Habari and name of user", function(){
        
        
        greetUser.setName("Drew");
              
                assert.equal("Habari Drew",greetUser.getGreetings("Swahili")); // 
                greetUser.setName("Thato");
                assert.equal("Habari Thato",greetUser.getGreetings("Swahili")); //    
            });
            
    it("should  display this user has already been greeted", function(){
        
        greetUser.setName("Drew");
        assert.equal("This user has already been greeted",greetUser.getGreetings("IsiNdebele")); //    
        
        });
              
            
    it("should  display Akwande and name of user", function(){
        
        
        greetUser.setName("Ora");
              
                assert.equal("Akwande Ora",greetUser.getGreetings("IsiNdebele")); // 
                greetUser.setName("Obakeng");
                assert.equal("Akwande Obakeng",greetUser.getGreetings("IsiNdebele")); // 
              
            });

            it("should  display 'Please choose valid name or language'", function(){
            
                greetUser.setName("Dineo");
                      
                        assert.equal("Enter valid name or language",greetUser.getGreetings("Zulu")); // 
                        assert.equal("Enter valid name or language",greetUser.getGreetings("English")); // 
                        
                        assert.equal("No user was entered",greetUser.getGreetings("")); //
                      
                    });


                    
            it("should  display number of users greeted", function(){
            
                      
                        assert.equal(7,greetUser.getCounter()); // 
                      
                    });


    
    });






