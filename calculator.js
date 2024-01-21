let Wins = 52
let Defeats = 20
let Level = ''
let WinBalance = '' 


function Calculator(Wins, Defeats){
    
    WinBalance = Wins - Defeats

    if(WinBalance<11){
        Level = 1
    }
    else if(WinBalance<21){
        Level = 2
    }
    else if(WinBalance<51){
        Level = 3
    }
    else if(WinBalance<81){
        Level = 4
    }
    else if(WinBalance<91){
        Level = 5
    }
    else if(WinBalance<101){
        Level = 6
    }
    else{
        Level = 7
    }

    
    switch(Level){
        
        case 1:
            return Level = 'Ferro'
            break
        
        case 2:
            return Level = 'Bronze'
            break

        case 3:
            return Level = 'Prata'
            break
            
        case 4:
            return Level = 'Ouro'
            break

        case 5:
            return Level = 'Diamante'
            break

        case 6:
            return Level = 'Lendario'
            break

        case 7:
            return Level = 'Imortal'
            break
    }
}

    Calculator(Wins,Defeats)
    console.log("O Herói tem saldo de "+WinBalance+" vitórias e está no nível de "+Level)