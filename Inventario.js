class Inventario
{
    constructor()
    {
        this.electrodomesticos  = [[0,0,0], [0,0,0]];
        this.televisores = [[0,0,0], [0,0,0]];
        this.neveras = [[0,0,0], [0,0,0]];
    }

    addElectrodomestico(electrodomestico)
    {
        if (electrodomestico.getProcedencia() == "importado")
        {
            switch(electrodomestico.getConsumo())
            {
                case "a": 
                    this.electrodomesticos[0][0] += 1;
                break; 
                case "b": 
                    this.electrodomesticos[0][1] += 1;
                break; 
                case "c": 
                    this.electrodomesticos[0][2] += 1;
                break; 
            }
        }
        else
        {
            switch(electrodomestico.getConsumo())
            {
                case "a": 
                    this.electrodomesticos[1][0] += 1;
                break; 
                case "b": 
                    this.electrodomesticos[1][1] += 1;
                break; 
                case "c": 
                    this.electrodomesticos[1][2] += 1;
                break; 
            }
        }
        
    }  

    addTelevisor(televisor)
    {
        if (televisor.getProcedencia() == "importado")
        {
            switch(televisor.getConsumo())
            {
                case "a": 
                    this.televisores[0][0] += 1;
                break; 
                case "b": 
                    this.televisores[0][1] += 1;
                break; 
                case "c": 
                    this.televisores[0][2] += 1;
                break; 
            }
        }
        else
        {
            switch(televisor.getConsumo())
            {
                case "a": 
                    this.televisores[1][0] += 1;
                break; 
                case "b": 
                    this.televisores[1][1] += 1;
                break; 
                case "c": 
                    this.televisores[1][2] += 1;
                break; 
            }
        }
        
    }  
    
    addNevera(nevera)
    {
        if (nevera.getProcedencia() == "importado")
        {
            switch(nevera.getConsumo())
            {
                case "a": 
                    this.neveras[0][0] += 1;
                break; 
                case "b": 
                    this.neveras[0][1] += 1;
                break; 
                case "c": 
                    this.neveras[0][2] += 1;
                break; 
            }
        }
        else
        {
            switch(nevera.getConsumo())
            {
                case "a": 
                    this.neveras[1][0] += 1;
                break; 
                case "b": 
                    this.neveras[1][1] += 1;
                break; 
                case "c": 
                    this.neveras[1][2] += 1;
                break; 
            }
        }
        
    }      

    checkInventario()
    {
        let cantidadesPositivas = true;

        this.electrodomesticos.forEach((procedencia, p_index) =>
        {
            procedencia.forEach((elemento), e_index =>
            {
                if (elemento < 0)
                {
                    cantidadesPositivas = false;
                    this.electrodomesticos[p_index][e_index] = 0
                }
            });
        });
        this.televisores.forEach((procedencia, p_index) =>
        {
            procedencia.forEach((elemento, e_index) =>
            {
                if (elemento < 0)
                {
                    cantidadesPositivas = false;
                    this.televisores[p_index][e_index] = 0
                }
            });
        });
        this.neveras.forEach((procedencia, p_index) =>
        {
            procedencia.forEach((elemento, e_index) =>
            {
                if (elemento < 0)
                {
                    cantidadesPositivas = false;
                    this.neveras[p_index][e_index] = 0
                }
            });
        });

        return cantidadesPositivas;
    }

    removeElectrodomestico(electrodomestico)
    {
        if (electrodomestico.getProcedencia() == "importado")
        {
            switch(electrodomestico.getConsumo())
            {
                case "a": 
                    this.electrodomesticos[0][0] -= 1;
                break; 
                case "b": 
                    this.electrodomesticos[0][1] -= 1;
                break; 
                case "c": 
                    this.electrodomesticos[0][2] -= 1;
                break; 
            }
        }
        else
        {
            switch(electrodomestico.getConsumo())
            {
                case "a": 
                    this.electrodomesticos[1][0] -= 1;
                break; 
                case "b": 
                    this.electrodomesticos[1][1] -= 1;
                break; 
                case "c": 
                    this.electrodomesticos[1][2] -= 1;
                break; 
            }
        }
        return this.checkInventario();
    }  

    removeTelevisor(televisor)
    {
        console.log(televisor.getProcedencia());
        console.log(televisor.getConsumo());

        if (televisor.getProcedencia() == "importado")
        {
            switch(televisor.getConsumo())
            {
                case "a": 
                    this.televisores[0][0] -= 1;
                break; 
                case "b": 
                    this.televisores[0][1] -= 1;
                break; 
                case "c": 
                    this.televisores[0][2] -= 1;
                break; 
            }
        }
        else
        {
            switch(televisor.getConsumo())
            {
                case "a": 
                    this.televisores[1][0] -= 1;
                break; 
                case "b": 
                    this.televisores[1][1] -= 1;
                break; 
                case "c": 
                    this.televisores[1][2] -= 1;
                break; 
            }
        }

        return this.checkInventario();    
    }  
    
    removeNevera(nevera)
    {
        if (nevera.getProcedencia() == "importado")
        {
            switch(nevera.getConsumo())
            {
                case "a": 
                    this.neveras[0][0] -= 1;
                break; 
                case "b": 
                    this.neveras[0][1] -= 1;
                break; 
                case "c": 
                    this.neveras[0][2] -= 1;
                break; 
            }
        }
        else
        {
            switch(nevera.getConsumo())
            {
                case "a": 
                    this.neveras[1][0] -= 1;
                break; 
                case "b": 
                    this.neveras[1][1] -= 1;
                break; 
                case "c": 
                    this.neveras[1][2] -= 1;
                break; 
            }
        }
        
        return this.checkInventario();
    }      

    getElectrodomesticos()
    {
        return this.electrodomesticos;
    }

    getTelevisores()
    {
        return this.televisores;
    }

    getNeveras()
    {
        return this.neveras;
    }

}