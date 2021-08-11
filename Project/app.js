console.log("App");
/*//object literal

const person={
    name:"Andrew",
    city:"San Diego",
    age:"32",
    student:true,
    music:["Coldplay","Oasis","Beatles"],
    address:{
        street:"University",
        number:"262-K"
    }
}
//how to select object. (person."")
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.music[1])//calling array posistion.
console.log(person.address.number)*/

var salon={
    name:"The Fashion Pet",
    telephone:"555-555-5555",
    address:{
        street:"Palm",
        number:"345"
    },
    hour:{
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[]
}
        /*{
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Great Dane",
            service:"Full Service",
            ownerName:"Shaggy",
            contactPhone:"555-555-5555"
        },
        {
            name:"Scrappy",
            age:50,
            gender:"Male",
            breed:"Great Dane",
            service:"Nails Cut",
            ownerName:"Shaggy",
            contactPhone:"555-555-5555"
        },
        {
            name:"Bugs B",
            age:60,
            gender:"Male",
            breed:"Rabbit",
            service:"Hair Cut",
            ownerName:"Warner",
            contactPhone:"555-555-5556"
        },
        {
            name:"Daffy",
            age:60,
            gender:"Male",
            breed:"Duck",
            service:"Full Service",
            ownerName:"Warner",
            contactPhone:"555-555-5556"
        }*/ //Option 1

        //Option 2
        class Pet{
            constructor(name, age, gender, breed, service, ownerName, contactPhone){
                this.name = name;
                this.age = age;
                this.gender = gender;
                this.breed = breed;
                this.service = service;
                this.ownerName = ownerName;
                this. contactPhone = contactPhone;
            }
        }
               /* const scooby = new Pet("Scooby", 60, "Male", "Dane", "Full Service",
                "Shaggy", "555-555-5555");
                    console.log(scooby);
                const bugsB = new Pet("Bugs B", 60, "Male", "Rabit", "Hair Cut",
                "Warner", "555-555-5555");
                    console.log(bugsB);
                const daffy = new Pet("Daffy", 60, "Male", "Duck", "Full Service",
                "Warner", "555-555-5555");
                    console.log(daffy);
                    salon.pets.push(scooby);
                    salon.pets.push(bugsB);//alternative option is able to push all objects in the same line.
                    salon.pets.push(daffy);*/
                            



/*salon.pets.forEach((pets)=>{
    console.log(pets.name)
});*/


//console.log(`${salon.name} opens from ${salon.hour.open} to ${salon.hour.close}.`)<--practice

function dispalyInfo(){
    document.getElementById("footer-site").innerHTML=`
        <p>${salon.name}</p>
        <p>${salon.address.street}, ${salon.address.number} telephone number: ${salon.telephone}</p>
        <p>The salon is open frm ${salon.hour.open} to ${salon.hour.close}</p>
`;
}
dispalyInfo();

function register(){
    //step 1: create the variables and store the values from the inputs.
    //step 2: create the object.
    //step 3: push the object.

    //step 1:
    var nameInput = document.getElementById("petName").value;
    var ageInput = document.getElementById("petAge").value;
    var genderInput = document.getElementById("petGender").value;
    var breedInput = document.getElementById("petBreed").value;
    var serviceInput = document.getElementById("petService").value;
    var ownerNameInput = document.getElementById("ownerName").value;
    var contactPhoneInput = document.getElementById("contactPhone").value;
    console.log(nameInput,ageInput,genderInput,breedInput,serviceInput,ownerNameInput,contactPhoneInput);

    //step2:
    var thePet = new Pet(nameInput,ageInput,genderInput,breedInput,serviceInput,ownerNameInput,contactPhoneInput);
    console.log(thePet);

    //step 3:
    salon.pets.push(thePet);
    console.log(salon.pets);
    clearInputs();
    displayPets();
    table();
}
    //clear input info on form:
    function clearInputs(){
    document.getElementById("petName").value="";
    document.getElementById("petAge").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("petService").value="";
    document.getElementById("ownerName").value="";
    document.getElementById("contactPhone").value="";
     
}

    //display info from form inputs.
    function displayPets(){
        /*for(var i=0;i<salon.pets.length;i++){
            document.getElementById('pets').innnerHTML+=`<li>${salon.pets[i].name}</li>`
        }*/ //option 1.
        var tmp = "";
            for(var i=0;i<salon.pets.length;i++){
            tmp+=`
                <div>
                    <h3> Name: ${salon.pets[i].name}</h3>
                    <p> Age:${salon.pets[i].age}</p>
                    <p> Gender:${salon.pets[i].gender}</p>
                    <p> Breed:${salon.pets[i].breed}</p>
                    <p> Service:${salon.pets[i].service}</p>
                    <p> Owner's Name:${salon.pets[i].ownerName}</p>
                    <p> Contact Phone#:${salon.pets[i].contactPhone}</p>
                </div>`;    
            
        }
        //document.getElementById('pets').innerHTML=tmp;    
    }
function table(){
    var tmp = "";
    for(var i=0;i<salon.pets.length;i++){
    tmp+=`
        <tr>
            <td>${salon.pets[i].name}</td>
            <td>${salon.pets[i].age}</td>
            <td>${salon.pets[i].gender}</td>
            <td>${salon.pets[i].breed}</td>
            <td>${salon.pets[i].service}</td>
            <td>${salon.pets[i].ownerName}</td>
            <td>${salon.pets[i].contactPhone}</td>
            <td><button type="button" class="btn btn-info">Edit</button></td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
        </tr>`;    
        }
        document.getElementById('table-pets').innerHTML=tmp;
    }     
function init(){
                const scooby = new Pet("Scooby", 60, "Male", "Dane", "Full Service",
                "Shaggy", "555-555-5555");
                    console.log(scooby);
                const bugsB = new Pet("Bugs B", 60, "Male", "Rabit", "Hair Cut",
                "Warner", "555-555-5555");
                    console.log(bugsB);
                const daffy = new Pet("Daffy", 60, "Male", "Duck", "Full Service",
                "Warner", "555-555-5555");
        salon.pets.push(scooby,bugsB,daffy);
        displayPets();
        dispalyInfo();
        table();
    }
    window.onload=init;

//document.write(`There are ${salon.pets.length} pets in the saloon.`);

/*for(var i=0;i<salon.pets.length;i++){
document.write(`${salon.pets[i].name}`);
};*/ //Assignment best option is to create a function.

