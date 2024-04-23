export interface IDespacho {
    id_despacho: number | null | undefined,
    fecha_creacion: string | null | undefined,
    ciudad_origen: number,
    ciudad_destino: number,
    direccion_remitente: string,
    direccion_destinatario: string,
    documento_remitente: string,
    documento_destinatario: string,
    nombre_remitente: string,
    nombre_destinatario: string,
    celular_remitente: string,
    celular_destinatario: string,
    id_mercancia: string,
    numero_envio: string | null | undefined,
    id_estado: number,
    peso_envio: number | null | undefined;
    tipo_envio: string | null | undefined;
    tipo_entrega: string | null | undefined;
    valor_cobrado: number | null | undefined;
    valor_a_cobrar: number | null | undefined;
    observaciones: string | null | undefined;


}
