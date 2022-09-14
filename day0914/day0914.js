function aat(pokk){
    for(let i=0; i<=type1.length; i++){
        if(pokk.type1[i].attack(pokk.type1[i+1])){
            atk[i]*0.7;
        }else if(pokk.type1[5].attack(pokk.type1[0])){
            atk[5]*0.7;
        }if(pokk.type1[i+1].attack(pokk.type1[i])){
            atk[i]*1.3;
        }else if(pokk.type1[0].attack(pokk.type1[5])){
            atk[5]*1.3;
        }else{
            atk;
        }
    }
}

