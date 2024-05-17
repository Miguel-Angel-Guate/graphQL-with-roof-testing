import db from './_db.js'
export const resolvers = {
    Query: {
        roofs() {
            return db.roofs;
        },
        roof(_, args) {
            return db.roofs.find((roof) => roof.id === args.id);
        },
        contractors() {
            return db.contractors;
        },
        contractor(_, args) {
            return db.contractors.find((contractor) => contractor.id === args.id);
        },
        reviews() {
            return db.reviews;
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id);
        }
    },
    Roof: {
        reviews(parent) {
            return db.reviews.filter((r) => r.roof_id === parent.id);
        }
    },
    Review: {
        contractor(parent) {
            return db.contractors.find((c) => c.id === parent.contractor_id);
        },
        roof(parent) {
            return db.roofs.find((r) => r.id === parent.roof_id);
        }
    },
    Contractor: {
        reviews(parent) {
            return db.reviews.filter((r) => r.contractor_id === parent.id);
        }
    }
};