class ShootingGame{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }
    getRandomItem(){
        let item = Math.floor(Math.random()*2)
        switch (item){
            case 0 : return {health: 10, power: 0};
            case 1 : return {health: 0, power: 10};
        }
    }

    start(){
        let attack = this.player1;
        let defend = this.player2;

        do{
            let item1 = this.getRandomItem();
            attack.useItem(item1);
            let item2 = this.getRandomItem()
            defend.useItem(item2);

            console.log(attack, "attack", defend)
            defend.damage(attack.power);
           

            if(defend.health < 0){
                defend.health = 0;
            }

            [attack, defend] = [defend, attack]

            attack.showStatus();
            defend.showStatus();

            console.log("=============== END TURN ==================")

        }while(this.player1.health > 0 && this.player2.health > 0 )    
        
        if (this.player1.health > 0){
            console.log("Player 1 Wins");
        }
        else if (this.player2.health >0){
            console.log("Player 2 Wins");
        }
        else{
            console.log("Error");
        }
    }
}

class Player{
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.power = 10;
    }

    damage(power){
        this.health -= power;
    
    }
    useItem(item){
        this.health += item.health;
        this.power += item.power;
    }
    showStatus(){
        console.log(this.name, "health : ", this.health, "power : ", this.power);
    }
}

let player1 = new Player;
let player2 = new Player;

player1.name = "Player1";
player2.name = "Player2";

let arena = new ShootingGame(player1,player2);

arena.start();

console.log("\n");


// exercise 2
class Employee {
    constructor(name, hourlyRate, overtimeRate) {
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.overtimeRate = overtimeRate;
        this.workingHours = 0;
    }

    addWorkingHours(hours) {
        this.workingHours += hours;
    }

    calculateSalary() {
        if (this.workingHours > 6){
            return (this.hourlyRate * 6) + (this.overtimeRate * (this.workingHours-6));
        } else{
            return this.hourlyRate * this.workingHours;
        }
    }
}

class FulltimeEmployee extends Employee {
    constructor(name, hourlyRate, overtimeRate) {
        super(name, hourlyRate, overtimeRate); 
    }
}

class ParttimeEmployee extends Employee {
    constructor(name, hourlyRate, overtimeRate) {
        super(name, hourlyRate, overtimeRate); 
    }
}

let Robert = new FulltimeEmployee("Robert", 100000, 75000);
let Selena = new ParttimeEmployee("Selena", 50000, 30000);

Robert.addWorkingHours(7);
Selena.addWorkingHours(7);

console.log(Robert.name, "Full-time employee salary: IDR", Robert.calculateSalary());
console.log(Selena.name, "Part-time employee salary: IDR", Selena.calculateSalary());

