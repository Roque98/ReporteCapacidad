const Color = {
    CRITICO: 'critico',
    MEDIO: 'medio',
    OPTIMO: 'optimo'
};

let result = {
    capas: [
        {
            nombre: "APP",
            estado: Color.CRITICO,
            tickets: 5,
            lista_resumen: [
                {
                    estado: Color.CRITICO,
                    texto: "No se cuentan con garantias en la capa de middleware, base de datos y telecomunicacioes",
                    orden: 1
                }
            ],
            iconos_performance: [
                {
                    nombre: "CPU",
                    icono: "fa-microchip"
                }
            ],
            orden: 1
        },
        {
            nombre: "WEB",
            estado: Color.Medio,
            tickets: 14,
            lista_resumen: [
                {
                    estado: Color.CRITICO,
                    texto: "No se cuentan con garantias en la capa de middleware, base de datos y telecomunicacioes",
                    orden: 1
                }
            ],
            orden: 2
        },
        {
            nombre: "BD",
            estado: Color.OPTIMO,
            tickets: 3,
            lista_resumen: [
                {
                    estado: Color.CRITICO,
                    texto: "No se cuentan con garantias en la capa de middleware, base de datos y telecomunicacioes",
                    orden: 1
                }
            ],
            orden: 3
        }
    ]
}