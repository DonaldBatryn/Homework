import gql from "graphql-tag";

export default {
    DELETE_GOD: gql`
        mutation DeleteGod($id: ID) {
        deleteGod(id: $id) {
            id
        }
        }
    `,
    NEW_GOD: gql`
        mutation NewGod($name: String, $type: String, $description: String) {
            newGod(name: $name, type: $type, description: $description) {
                id
                name
                description
            }
        }
    `,
    NEW_EMBLEM: gql`
        mutation NewEmblem($name: String) {
            newEmblem(name: $name) {
                id
                name
            }
        }
    `,
    NEW_ABODE: gql`
        mutation NewAbode($name: String, $coordinates: String) {
            newAbode(name: $name, coordinates: $coordinates) {
                id
                name
                coordinates
            }
        }
    `,
    UPDATE_GOD_NAME: gql`
        mutation updateGod($id: ID, $name: String) {
            updateGod(id: $id, name: $name) {
                id
                name
            }
        }
    `,
    UPDATE_GOD_TYPE: gql`
        mutation updateGod($id: ID, $type: String) {
            updateGod(id: $id, type: $type) {
                id,
                name
                type
            }
        }
    `,
    UPDATE_GOD_DESCRIPTION: gql`
        mutation updateGod($id: ID, $description: String) {
            updateGod(id: $id, description: $description) {
                id
                name
                description
            }
        }
    `,
    ADD_GOD_DOMAIN: gql`
        mutation AddGodDomain($godId: ID, $domain: String) {
            addGodDomain(godId: $godId, domain: $domain) {
                id
                domains
            }
        }
    `,
    REMOVE_GOD_DOMAIN: gql`
        mutation RemoveGodDomain($godId: ID, $domain: String) {
            removeGodDomain(godId: $godId, domain: $domain) {
                id
                domains
            }
        }
    `,
    UPDATE_GOD_ABODE: gql`
        mutation UpdateGodAbode($godId: ID, $abodeId: ID) {
            updateGodAbode(godId: $godId, abodeId: $abodeId) {
                id
                abode{
                    name
                }
            }
        }
    `
};