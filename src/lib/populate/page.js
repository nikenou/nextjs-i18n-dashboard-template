export default {
    populate: {
        contentSections: {
        populate: {
            picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
            },
            buttons: {
            populate: true,
            },
            feature: {
            populate: {
                fields: ["title", "description", "showLink", "newTab", "url", "text"],
                media: {
                fields: ["url", "alternativeText", "caption", "width", "height"],
                },
            },
            },
            testimonials: {
            populate: {
                picture: {
                fields: ["url", "alternativeText", "caption", "width", "height"],
                },
            },
            },
            plans: {
            populate: ["product_features"],
            },
            sliders: {
            populate: {
                image: {
                fields: ["alternativeText", "name", "url"],
                },
            },
            },
            submitButton: {
            populate: true,
            },
        },
        },
        seo: {
        fields: ["metaTitle", "metaDescription"],
        populate: { shareImage: true },
        }
    }
}