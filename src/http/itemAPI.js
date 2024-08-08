import { $AuthHost, $host } from "./index";

export const createType = async (type) => {
    const {data} = await $AuthHost.post('api/type', type)
    return data
}

export const getTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (type) => {
    const {data} = await $AuthHost.post('api/brand', type)
    return data
}

export const getBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createItem = async (item) => {
    const {data} = await $host.post('api/item', item)
    return data
}

export const getItems = async (typeId, brandId, page, limit = 6) => {
    const {data} = await $host.get('api/item', {params: {
        typeId, brandId, page, limit
    }})
    return data
}

export const getItem = async (id) => {
    const {data} = await $host.get('api/item/' + id)
    return data
}

export const deleteItem = async (id) => {
    const {data} = await $host.delete('api/item/' + id)
    return data
}
