function traiterValeur(param: string | number) {
    if (typeof param === "string"){
        return param.length;
    }else{
        return param * 2;
    }
}

