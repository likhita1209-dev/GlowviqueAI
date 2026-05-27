// User selections storage
const userSelections = {
    skinType: null,
    concern: null,
    budget: null
};

// E-commerce platform configurations for Indian market
const platforms = {
    nykaa: { name: "Nykaa", color: "#fc2779", icon: "🛍️" },
    amazon: { name: "Amazon India", color: "#ff9900", icon: "📦" },
    flipkart: { name: "Flipkart", color: "#2874f0", icon: "🛒" },
    myntra: { name: "Myntra", color: "#ff3f6c", icon: "👗" }
};

// Comprehensive Product Database with Indian e-commerce links
const productDatabase = {
    oily: {
        cleanser: [
            {
                name: "Cetaphil Oily Skin Cleanser",
                brand: "Cetaphil",
                price: "₹599",
                priceValue: 599,
                description: "Dermatologist-recommended foaming cleanser that removes excess oil and impurities without over-drying.",
                benefits: ["Controls excess oil", "Non-comedogenic", "Gentle formula"],
                link: "https://www.nykaa.com/cetaphil-oily-skin-cleanser/p/16334812?productId=16334812&pps=1&skuId=20992",
                platform: "nykaa",
                budget: "budget"
            },
            {
                name: "Plum Green Tea Pore Cleansing Face Wash",
                brand: "Plum",
                price: "₹345",
                priceValue: 345,
                description: "100% vegan face wash with green tea that deeply cleanses and controls oil production.",
                benefits: ["Removes excess oil", "Minimizes pores", "Paraben-free"],
                link: "https://www.amazon.in/Plum-Green-Cleansing-Bright-Soap-Free/dp/B0C629LWVS/ref=sr_1_5?crid=3AS1D8H9TND0O&dib=eyJ2IjoiMSJ9.-xaoqmYE-Fj_cB_n3WVOUhJLAROtZe9VVIMW3IH_7SHhd7YdRXDZXhUCwHCX3eok0jhU5CPFiZkI8UCtTQEsJVFv4eGyJ4ib15IJYaY2W-u_s5n6LfVaje5-hmAutzNsHbxfdM8xlnh0ptgCubjHddzARKDvzg3pSjO4Qop7b6f1R1KxbXOKGRDjPkCYAIKxmRn5Vk_kYeFQHNFrqdZu0eujOmHmTHiHI5asGUsKRyYPU093iHDaYwVAucMQR7OlB4cBTWDyUSvw7SDj4meO0jk3Va9OuNvYg6AP9Sw1h_4.w3Pqc-sQ84nBKegOjmeoVQVByQOs8eihTtAyIlLkDVo&dib_tag=se&keywords=plum%2Bgreen%2Btea%2Bpore%2Bcleansing%2Bface%2Bwash&qid=1779867410&sprefix=plum%2Bgreen%2Btea%2Bpore%2Bcleansin%2Caps%2C322&sr=8-5&th=1",

                platform: "amazon",
                budget: "budget"
            },
            {
                name: "Neutrogena Deep Clean Foaming Cleanser",
                brand: "Neutrogena",
                price: "₹299",
                priceValue: 299,
                description: "Deep cleansing formula that removes dirt, oil and makeup without over-drying skin.",
                benefits: ["Deep cleansing", "Oil-free", "Dermatologist tested"],
                link: "https://www.flipkart.com/neutrogena-deep-clean-foaming-cleanser/p/itme8gfw3zghacsf?pid=CNREWW7BZUYNW5TS&lid=LSTCNREWW7BZUYNW5TSZAJ2IC&marketplace=FLIPKART&q=Neutrogena+Deep+Clean+Foaming+Cleanser&store=g9b%2Fema%2F5la&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=77b569a5-b93c-4e22-89db-4b1863a11809.CNREWW7BZUYNW5TS.SEARCH&ppt=sp&ppn=sp&ssid=nsa5qsashc0000001779867714870&qH=07124219a848a398&ov_redirect=true&ov_redirect=true",
                platform: "flipkart",
                budget: "budget"
            },
            {
                name: "La Roche-Posay Effaclar Purifying Gel",
                brand: "La Roche-Posay",
                price: "₹500",
                priceValue: 500,
                description: "Gentle purifying gel cleanser for oily, acne-prone skin with zinc technology.",
                benefits: ["Removes excess oil", "Zinc technology", "Soap-free"],
                link: "https://www.nykaa.com/la-roche-posay-effaclar-purifying-anti-acne-gel-face-wash/p/23401738?productId=23401738&pps=1",
                platform: "nykaa",
                budget: "budget",
            }
        ],
        moisturizer: [
            {
                name: "Neutrogena Hydro Boost Water Gel",
                brand: "Neutrogena",
                price: "₹699",
                priceValue: 699,
                description: "Oil-free gel moisturizer with hyaluronic acid for hydration without heaviness.",
                benefits: ["Oil-free", "Non-comedogenic", "Hyaluronic acid"],
                link: "https://www.amazon.in/gp/aw/d/B00BQFTQW6/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=70d858fbf72f07928d858c83a98932be&hsa_cr_id=0&qid=1779868123&sr=1-1-e0fa1fdd-d857-4087-adda-5bd576b25987&aref=wlGeAIkMtu&ref_=sbx_s_sparkle_sbtcd_asin_0_title&pd_rd_w=fdohD&content-id=amzn1.sym.9269eab1-ae85-443b-9ec2-b2fa4ebaad05%3Aamzn1.sym.9269eab1-ae85-443b-9ec2-b2fa4ebaad05&pf_rd_p=9269eab1-ae85-443b-9ec2-b2fa4ebaad05&pf_rd_r=SP4S710B3YQZ267BV9QG&pd_rd_wg=m90T6&pd_rd_r=6eabc0e4-24c2-46fc-8a0d-013104657c06",
                platform: "amazon",
                budget: "budget"
            },
            {
                name: "Minimalist Sepicalm 3% Oat Moisturizer",
                brand: "Minimalist",
                price: "₹569",
                priceValue: 569,
                description: "Lightweight gel moisturizer with oat extract that soothes and hydrates oily skin.",
                benefits: ["Lightweight", "Soothes skin", "Non-greasy"],
                link: "https://beminimalist.co/products/niacinamide-10-with-matmarine?variant=44802331148449",
                platform: "minimalist",
                budget: "budget"
            },
            {
                name: "Clinique Dramatically Different Gel",
                brand: "Clinique",
                price: "₹3500",
                priceValue: 3500,
                description: "Lightweight gel moisturizer that strengthens skin's moisture barrier.",
                benefits: ["Oil-free formula", "Balances skin", "Dermatologist-developed"],
                link: "https://www.nykaa.com/clinique-dramatically-different-moisturizing-gel/p/77366?productId=77366&pps=1&skuId=76429",
                platform: "nykaa",
                budget: "luxury"
            }
        ],
        serum: [
            {
                name: "Minimalist Niacinamide 10% Face Serum",
                brand: "Minimalist",
                price: "₹569",
                priceValue: 569,
                description: "High-strength niacinamide serum that reduces sebum production and minimizes pores.",
                benefits: ["Controls oil", "Minimizes pores", "Affordable"],
                link: "https://beminimalist.co/products/niacinamide-10-with-matmarine?variant=44802331148449",
                platform: "minimalist",
                budget: "budget"
            },
            {
                name: "Dot & Key 2% Salicylic Acid Serum",
                brand: "Dot & Key",
                price: "₹453",
                priceValue: 453,
                description: "Salicylic acid serum that unclogs pores and controls excess oil production.",
                benefits: ["Exfoliates pores", "Reduces blackheads", "Gentle formula"],
                link: "https://www.flipkart.com/sera-natural-2-salicylic-acid-face-serum-active-acne-pimples-blackheads/p/itm8fe7b77554b81?pid=KMTHKVHBVN9GMRGH&lid=LSTKMTHKVHBVN9GMRGHPLEDH2&marketplace=FLIPKART&q=Dot+%26+Key+2%25+Salicylic+Acid+Serum&store=g9b%2Fema%2F5la&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=en_oirOrRFoZ0Tjsb6fpTe24mSMnRKQXwLIk8wI-mqxrp9sL9RKHcvDRMB9wMFiITvPRCab2dJr-3AB06utlltV4w%3D%3D&ppt=sp&ppn=sp&ssid=ddl2tzzec00000001779868935459&qH=a41193a3ca175f50&ov_redirect=true&ov_redirect=true",
                platform: "Filpkart",
                budget: "budget"
            },
            {
                name: "The Derma Co 10% Niacinamide Serum",
                brand: "The Derma Co",
                price: "₹503",
                priceValue: 503,
                description: "Dermatologically tested niacinamide serum for oil control and pore refinement.",
                benefits: ["Oil control", "Pore minimizing", "Dermatologist tested"],
                link: "https://www.amazon.in/Derma-Co-Niacinamide-Serum-Marks/dp/B08TQGMWT1/ref=sr_1_1_sspa?crid=1208VPDHD75CT&dib=eyJ2IjoiMSJ9.u-u_we4EcNS4z6NFo5PcUP5QNWrDz9ggj9pFsGZhpdAbU88PBbspqtgWUNHUDg2M3MKyuYqjJiy4jz_Uf7w8FsB2WJACFfIZ-HdcL9pkOEcXTQzj01iVZnjPsdj2UifAOrXNpep6SsgnRXqcZHROTwygpkpYAeTYW4gWjggPKKbyBjq9qi9LX77DRKrXjOYJGfPxvmC06LsGsxc51_AGMZllwlTkHSjKF9dAh8jp__kQcUsM17kSxuW5Pnmgpe-qDLli9gxRKRpjRl4tjXREBHl7irIsOhZAe28MJb3fftI.xDxuwBO_vhOdcUGj5YnxrMZTgx9q5kx_l-rGAIpGZUw&dib_tag=se&keywords=the%2Bderma%2Bco%2B10%25%2Bniacinamide%2Bserum&qid=1779869134&s=beauty&sprefix=The%2BDerma%2BCo%2B10%25%2BNiacinamide%2BSerum%2Cbeauty%2C385&sr=1-1-spons&aref=6rCuSrYfXZ&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
                platform: "amazon",
                budget: "budget"
            }
        ]
    },
    dry: {
        cleanser: [
            {
                name: "CeraVe Hydrating Facial Cleanser",
                brand: "CeraVe",
                price: "₹297",
                priceValue: 297,
                description: "Creamy, non-foaming cleanser that hydrates and restores the skin barrier with ceramides.",
                benefits: ["Hydrating formula", "Ceramides", "Hyaluronic acid"],
                link: "https://www.amazon.in/CeraVe-Hydrating-Cleanser-Normal-Skin/dp/B0D37HZG5C/ref=asc_df_B0D37HZG5C?mcid=f0b98e2a5459308bb6e0ae2d7de3cd7e&tag=googleshopdes-21&linkCode=df0&hvadid=709857154035&hvpos=&hvnetw=g&hvrand=9825235047582771647&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062037&hvtargid=pla-2309350792680&hvocijid=9825235047582771647-B0D37HZG5C-&hvexpln=0&gad_source=1&th=1",
                platform: "amazon",
                budget: "budget"
            },
            {
                name: "Cetaphil Gentle Skin Cleanser",
                brand: "Cetaphil",
                price: "₹418",
                priceValue: 418,
                description: "Ultra-gentle cleanser that cleanses without stripping natural oils from dry skin.",
                benefits: ["Gentle cleansing", "Maintains moisture", "Fragrance-free"],
                link: "https://www.nykaa.com/skin-care/face/face-cleanser/cetaphil-cleansing-lotion.html?skuId=22031",
                platform: "nykaa",
                budget: "budget"
            },
            {
                name: "Bioderma Sensibio H2O Micellar Water",
                brand: "Bioderma",
                price: "₹404",
                priceValue: 404,
                description: "Gentle micellar water that cleanses and removes makeup without drying skin.",
                benefits: ["Gentle cleansing", "No rinse needed", "Dermatologist recommended"],
                link: "https://bioderma.naosindia.in/products/sensibio-h2o",
                platform: "bioderma",
                budget: "mid"
            }
        ],
        moisturizer: [
            {
                name: "Cetaphil Rich Hydrating Cream",
                brand: "Cetaphil",
                price: "₹1299",
                priceValue: 1299,
                description: "Rich, nourishing cream that provides long-lasting hydration for very dry and sensitive skin.",
                benefits: ["Long-lasting hydration", "Hyaluronic acid", "Fragrance-free"],
                link: "https://www.amazon.in/Cetaphil-Optimal-Hydration-Healthy-Hydrated/dp/B09YMTJ3MQ",
                platform: "amazon",
                budget: "mid"
            },
            {
                name: "Physiogel Daily Moisture Therapy Cream",
                brand: "Physiogel",
                price: "₹648",
                priceValue: 648,
                description: "Clinically proven moisturizer that repairs and strengthens the skin barrier.",
                benefits: ["Repairs barrier", "Intense hydration", "Hypoallergenic"],
                link: "https://www.amazon.in/Physiogel-Hypoallergenic-Moisture-Sensitive-Provides/dp/B0BD29N17Q/ref=asc_df_B0BD29N17Q?mcid=7fe97fb7e56a344e900fdcc3fead3f82&tag=googleshopdes-21&linkCode=df0&hvadid=709991227886&hvpos=&hvnetw=g&hvrand=8314404088276613531&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062037&hvtargid=pla-1784008541198&psc=1&hvocijid=8314404088276613531-B0BD29N17Q-&hvexpln=0&gad_source=1",
                platform: "amazon",
                budget: "budget"
            },
            {
                name: "Kiehl's Ultra Facial Cream",
                brand: "Kiehl's",
                price: "₹1795",
                priceValue: 1795,
                description: "24-hour hydrating facial cream with glacial glycoprotein and desert plant extracts.",
                benefits: ["24-hour hydration", "Strengthens barrier", "Lightweight"],
                link: "https://www.kiehls.in/products/kiehls-ultra-facial-cream-with-24-hour-hydration-moisturizer-for-softer-hydrated-skin-435017?variant=43059147341867&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_content=ads&utm_source=GooglePaid&utm_medium=Pmax&utm_campaign=200426_Kiehls_DTC_PMax_Feed&gad_source=1&gad_campaignid=23775706042&gbraid=0AAAABC2yWjAW0ZoQgjzqTLIpoANsYYW7O&gclid=CjwKCAjwrNrQBhBjEiwAoR4VOx9cVce2buMjp6AAHXPJeoP7SXElxLdgtqjYrCoSLAagXVeFcI7KMBoCGDAQAvD_BwE",
                platform: "kiehls",
                budget: "mid"
            }
        ],
        serum: [
            {
                name: "Minimalist Hyaluronic Acid 2% Serum",
                brand: "Minimalist",
                price: "₹599",
                priceValue: 599,
                description: "Multi-molecular hyaluronic acid serum that provides deep hydration at multiple skin layers.",
                benefits: ["Deep hydration", "Plumps skin", "Budget-friendly"],
                link: "https://www.amazon.in/Minimalist-Hyaluronic-Intense-Hydration-Hydrating/dp/B08FB972DT/ref=asc_df_B08FB972DT?mcid=e1899cefa77c3b8eace92ead51b7da59&tag=googleshopdes-21&linkCode=df0&hvadid=709979221152&hvpos=&hvnetw=g&hvrand=10982909062024210838&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062037&hvtargid=pla-1143931408312&hvocijid=10982909062024210838-B08FB972DT-&hvexpln=0&gad_source=1&th=1",
                platform: "amazon",
                budget: "budget"
            },
            {
                name: "Plum 15% Vitamin C Face Serum",
                brand: "Plum",
                price: "₹451",
                priceValue: 451,
                description: "Brightening serum with vitamin C and hyaluronic acid for dry, dull skin.",
                benefits: ["Brightens", "Hydrates", "Vegan formula"],
                link: "https://www.nykaa.com/plum-15percent-vitamin-c-face-serum-with-mandarin/p/1425356?ptype=product&skuId=1425354&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=PerformanceMaxNCA_LowCAC_1Day&gad_source=1&gad_campaignid=23440573430&gbraid=0AAAABBsUhjQoOXRoKZsXxsyVzmSVow2y-&gclid=CjwKCAjwrNrQBhBjEiwAoR4VO-SRk2Tz5I5bihAFgWLdkNP77iwWqboJU34_XcxrjC_rPXni01IpEBoCCjsQAvD_BwE",
                platform: "nykaa",
                budget: "budget"
            },
            {
                name: "Estée Lauder Advanced Night Repair",
                brand: "Estée Lauder",
                price: "₹1250",
                priceValue: 1250,
                description: "Iconic night serum that repairs and renews skin while you sleep.",
                benefits: ["Repairs skin", "Reduces lines", "Strengthens barrier"],
                link: "https://www.nykaa.com/estee-lauder-advanced-night-repair-synchronized-multi-recovery-complex/p/833283?ptype=product&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=PLA_Elca_V3&hlp=hlpa&gad_source=1&gad_campaignid=23855940428&gbraid=0AAAAADo9oc9a5JlGFwulZDr__sd-RUYPG&gclid=CjwKCAjwrNrQBhBjEiwAoR4VO-m76NLG4hHXaWZW0P7IdzizrCEzPoXsGwuiM5eR7BDCXsboVHT6FBoCTMoQAvD_BwE&skuId=833278",
                platform: "nykaa",
                budget: "mid"
            }
        ]
    },
    combination: {
        cleanser: [
            {
                name: "Cetaphil Daily Facial Cleanser",
                brand: "Cetaphil",
                price: "₹380",
                priceValue: 380,
                description: "Gentle cleanser that removes dirt and makeup without over-drying or irritating skin.",
                benefits: ["Balanced cleansing", "Non-irritating", "Dermatologist-recommended"],
                link: "https://www.amazon.in/Cetaphil-Hydrating-Sulphate-Free-Niacinamide-Sensitive/dp/B01CCGW4OE/ref=asc_df_B01CCGW4OE?mcid=2ac139f902833125bb8121f50c624656&tag=googleshopdes-21&linkCode=df0&hvadid=710025356537&hvpos=&hvnetw=g&hvrand=16561876096550573497&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062037&hvtargid=pla-335129090304&hvocijid=16561876096550573497-B01CCGW4OE-&hvexpln=0&gad_source=1&th=1",
                platform: "amazon",
                budget: "budget"
            },
            {
                name: "Mamaearth Vitamin C Foaming Face Wash",
                brand: "Mamaearth",
                price: "₹356",
                priceValue: 356,
                description: "Gentle foaming cleanser with vitamin C that balances and brightens skin.",
                benefits: ["Balances skin", "Brightening", "Natural ingredients"],
                link: "https://www.flipkart.com/mamaearth-vitamin-c-foaming-face-wash/p/itm0e99ce4d476d5",
                platform: "flipkart",
                budget: "budget"
            },
            {
                name: "Forest Essentials Facial Cleanser",
                brand: "Forest Essentials",
                price: "₹495",
                priceValue: 495,
                description: "Ayurvedic cleanser with natural ingredients that gently cleanses combination skin.",
                benefits: ["Ayurvedic formula", "Balances skin", "Natural ingredients"],
                link: "https://www.nykaa.com/forest-essentials-delicate-facial-cleanser-mashobra-honey-lemon-rosewater-config/p/304705?ptype=product&skuId=304704&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=PerformanceMaxLuxe_P0Brands_1Day&gad_source=1&gad_campaignid=23219003937&gbraid=0AAAABBsUhjSJbAwKoPTHbsB8WB6wj5tmN&gclid=CjwKCAjwrNrQBhBjEiwAoR4VOxwHRLWbXYwbBzh8LgejlHpCyB4B9eUYklXxTztadi3Rhro2FBJCtBoCApUQAvD_BwE",
                platform: "nykaa",
                budget: "budget"
            }
        ],
        moisturizer: [
            {
                name: "Neutrogena Oil-Free Moisture",
                brand: "Neutrogena",
                price: "₹795",
                priceValue: 795,
                description: "Lightweight moisturizer that hydrates without adding oil to combination skin.",
                benefits: ["Oil-free", "Non-comedogenic", "Combination-friendly"],
                link: "https://www.amazon.in/Neutrogena-Oil-Free-Moisture-SPF-115ML/dp/B0B18MRNG1/ref=asc_df_B0B18MRNG1?mcid=70b202df2d6b37a7b4bf80043088d435&tag=googleshopdes-21&linkCode=df0&hvadid=710122837100&hvpos=&hvnetw=g&hvrand=13875995186242832807&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062037&hvtargid=pla-1661986002144&psc=1&hvocijid=13875995186242832807-B0B18MRNG1-&hvexpln=0&gad_source=1",
                platform: "amazon",
                budget: "budget"
            },
            {
                name: "Dot & Key Watermelon Hyaluronic Cooling Gel",
                brand: "Dot & Key",
                price: "396",
                priceValue: 396,
                description: "Lightweight gel moisturizer with watermelon and hyaluronic acid for balanced hydration.",
                benefits: ["Lightweight", "Cooling effect", "Balances skin"],
                link: "https://www.dotandkey.com/products/watermelon-moisturizer-icy-gel",
                platform: "dotandkey",
                budget: "budget"
            },
            {
                name: "Clinique Moisture Surge 72H",
                brand: "Clinique",
                price: "₹2872",
                priceValue: 2872,
                description: "Auto-replenishing hydrator that locks in moisture for 72 hours.",
                benefits: ["Long-lasting hydration", "Oil-free", "Aloe water"],
                link: "https://www.clinique.com/product/1687/79628/skincare/moisturizers/moisture-surgetm-intense-72h-lipid-replenishing-hydrator?msockid=16b0986530dd64a434728ecd310e65eb",
                platform: "clinique",
                budget: "luxury"
            }
        ],
        serum: [
            {
                name: "The Derma Co 10% Vitamin C Serum",
                brand: "The Derma Co",
                price: "₹971",
                priceValue: 971,
                description: "Vitamin C serum that brightens and evens skin tone for combination skin.",
                benefits: ["Brightens skin", "Evens tone", "Dermatologist tested"],
                link: "https://www.amazon.in/Derma-Co-Niacinamide-Penetration-Pigmentation/dp/B0GHMRH7Q5",
                platform: "amazon",
                budget: "budget"
            },
            {
                name: "Minimalist Multi-Peptide Serum",
                brand: "Minimalist",
                price: "₹849",
                priceValue: 849,
                description: "Multi-peptide serum that targets multiple signs of aging while balancing skin.",
                benefits: ["Anti-aging", "Peptides", "Balances skin"],
                link: "https://www.nykaa.com/minimalist-multi-peptide-serum/p/901234",
                platform: "nykaa",
                budget: "budget"
            },
            {
                name: "Kiehl's Clearly Corrective Dark Spot Solution",
                brand: "Kiehl's",
                price: "₹5,200",
                priceValue: 5200,
                description: "Activated vitamin C serum that reduces dark spots and evens tone.",
                benefits: ["Brightens", "Evens tone", "Dermatologist-tested"],
                link: "https://www.nykaa.com/kiehls-clearly-corrective-dark-spot-solution/p/012345",
                platform: "nykaa",
                budget: "luxury"
            }
        ]
    },
    sensitive: {
        cleanser: [
            {
                name: "Cetaphil Gentle Skin Cleanser",
                brand: "Cetaphil",
                price: "₹1766",
                priceValue: 1766,
                description: "Ultra-gentle cleanser free of harsh ingredients, perfect for sensitive skin.",
                benefits: ["Fragrance-free", "Non-irritating", "Dermatologist-tested"],
                link: "https://www.nykaa.com/cetaphil-cleansing-lotion/p/22032?skuId=392482&cstrackid=7f9f373a-5ee2-43c8-b7fb-1074fc269029",
                platform: "nykaa",
                budget: "budget"
            },
            {
                name: "Bioderma Sensibio Gel Moussant",
                brand: "Bioderma",
                price: "₹1,690",
                priceValue: 1690,
                description: "Gentle gel cleanser that removes makeup without stripping sensitive skin.",
                benefits: ["Fragrance-free", "Soap-free", "pH-balanced"],
                link: "https://www.nykaa.com/bioderma-sensibio-gentle-soothing-micellar-cleansing-foaming-gel-for-sensitive-skin/p/4961206?skuId=4961199",
                platform: "nykaa",
                budget: "mid"
            },
            {
                name: "La Roche-Posay Toleriane Cleanser",
                brand: "La Roche-Posay",
                price: "₹1,350",
                priceValue: 1350,
                description: "Hydrating gentle cleanser for sensitive and reactive skin.",
                benefits: ["Ultra-gentle", "Hydrating", "Thermal water"],
                link: "https://www.amazon.in/Roche-Posay-Toleriane-Dermo-Cleanser-Make-Up-Removal/dp/B07GZQXMT5",
                platform: "amazon",
                budget: "mid"
            }
        ],
        moisturizer: [
            {
                name: "Aveeno Daily Moisturizing Lotion",
                brand: "Aveeno",
                price: "₹403",
                priceValue: 403,
                description: "Calming moisturizer with colloidal oatmeal that soothes sensitive skin.",
                benefits: ["Calms redness", "Fragrance-free", "Oat extract"],
                link: "https://www.firstcry.com/aveeno/aveeno-daily-moisturising-lotion-71-ml/9094709/product-detail?ref=BSN_Shopping_78_Body-care!BSN-Standard_All_Search_Ads!&msclkid=05f7445e000f1a88b6672e48b387935e&utm_source=bing&utm_medium=cpc&utm_campaign=BSN-Standard_All_Search_Ads&utm_term=4586337882898975&utm_content=Ad%20group%20%231",
                platform: "amazon",
                budget: "budget"
            },
            {
                name: "La Roche-Posay Toleriane Double Repair Moisturizer",
                brand: "La Roche-Posay",
                price: "₹1,599",
                priceValue: 1599,
                description: "Dermatologist-recommended moisturizer that repairs skin barrier for sensitive skin.",
                benefits: ["Prebiotic formula", "Ceramides", "Niacinamide"],
                link: "https://www.nykaa.com/la-roche-posay-toleriane-double-repair-moisturizer/p/234567",
                platform: "nykaa",
                budget: "mid"
            },
            {
                name: "Avène Tolerance Extreme Cream",
                brand: "Avène",
                price: "₹2,660",
                priceValue: 2660,
                description: "Sterile cosmetics moisturizer for hypersensitive and allergic skin.",
                benefits: ["Hypoallergenic", "Sterile formula", "Thermal water"],
                link: "https://www.nykaa.com/avene-revitalizing-nourishing-cream/p/5052447?productId=5052447&pps=2",
                platform: "nykaa",
                budget: "luxury"
            }
        ],
        serum: [
            {
                name: "Minimalist Niacinamide 5% Serum",
                brand: "Minimalist",
                price: "₹599",
                priceValue: 599,
                description: "Gentle niacinamide serum that reduces redness and strengthens sensitive skin.",
                benefits: ["Reduces redness", "Gentle formula", "Affordable"],
                link: "https://www.flipkart.com/minimalist-5-niacinamide-serum-glowing-clear-skin-hyaluronic-acid-hydrating-repairing-men-women/p/itm1913cd5e97f2c",
                platform: "flipkart",
                budget: "budget"
            },
            {
                name: "The Derma Co 1% Hyaluronic Sunscreen Gel",
                brand: "The Derma Co",
                price: "₹465",
                priceValue: 465,
                description: "Gentle hydrating serum with hyaluronic acid for sensitive skin.",
                benefits: ["Hydrates", "Gentle", "Non-irritating"],
                link: "https://www.flipkart.com/derma-co-sunscreen-spf-50-pa-1-hyaluronic-hydrating-gel-dry-sensitive-skin/p/itm57f8764d8a226?pid=SNRH93GQK7FCVDNV&lid=LSTSNRH93GQK7FCVDNVPHX87L&marketplace=FLIPKART&q=dermaco+1+hyaluronic+acid+sunscreen&store=g9b%2Fema%2F5la%2Fxrh&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_na&fm=Search&iid=c2ac82b7-eb32-4244-a98b-22018bfd2361.SNRH93GQK7FCVDNV.SEARCH&ppt=sp&ppn=sp&ssid=ordktwxe8g0000001779872969686&qH=f36003e32c689d27&ov_redirect=true&ov_redirect=true",
                platform: "flipkart",
                budget: "budget"
            },
            {
                name: "La Roche-Posay Cicaplast B5 Serum",
                brand: "La Roche-Posay",
                price: "₹3,300",
                priceValue: 3300,
                description: "Soothing serum that repairs and calms irritated sensitive skin.",
                benefits: ["Calms irritation", "Repairs barrier", "Panthenol"],
                link: "https://www.amazon.in/Roche-Posay-Anti-Dark-Pigmentation-Post-Acne-Niacinamide/dp/B0CM4B43DZ/ref=sr_1_2_sspa?crid=2VTIHDM74PAK4&dib=eyJ2IjoiMSJ9.V5F9qqmF-PRIkRPmE_HzzkvB6BB5VO1c1_Qbbn2OJ9vOQyIFMvtHgIigzSX-QYcuKpEYSfJwzmfbP5LWqVQsF-hvsRKuOzHcMxCKR56wj0yrSsM82k_dc_rya2rI-Aj9blWMM24GiLxJY_imy-cjhBTs4pSDkqttLt0ep_8S-6P31KQ0jUTXfxbMdm6LJTpABwWDFDVxOT-KH5HLvFaJpHq03p7panqKVZMbT6K10kl3Pw7JksNSWaOXdPtvLtCJGLjmGbewb2hI09UobyA0xCeoNv34lWwV9_8V3F3Y9sQ.DcKEm_tiHX1PY7e5pFZd0mdtHtSe17sPPju7oFv2Cvw&dib_tag=se&keywords=la+roche-posay+cicaplast+b5+serum&qid=1779872878&sprefix=%2Caps%2C383&sr=8-2-spons&aref=JlTavh3i7S&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
                platform: "amazon",
                budget: "luxury"
            }
        ]
    },
    normal: {
        cleanser: [
            {
                name: "Neutrogena Fresh Foaming Cleanser",
                brand: "Neutrogena",
                price: "₹6799",
                priceValue: 6799,
                description: "Refreshing foaming cleanser that removes impurities without over-drying normal skin.",
                benefits: ["Gentle cleansing", "Refreshing", "Dermatologist-tested"],
                link: "https://www.amazon.in/Neutrogena-Fresh-Foaming-Cleanser-200Ml/dp/B000052ZAY?th=1",
                platform: "amazon",
                budget: "luxury"
            },
            {
                name: "Mamaearth Ubtan Face Wash",
                brand: "Mamaearth",
                price: "₹300",
                priceValue: 300,
                description: "Natural face wash with turmeric and saffron for glowing skin.",
                benefits: ["Natural ingredients", "Brightening", "Gentle"],
                link: "https://www.flipkart.com/mamaearth-ubtan-natural-glow-turmeric-saffron-tan-removal-removes-face-wash/p/itmf2666f6247700?pid=FCWHFUX9XC5B9GFF&lid=LSTFCWHFUX9XC5B9GFFIEVULJ&marketplace=FLIPKART&q=Mamaearth+Ubtan+Face+Wash&store=g9b%2Fema%2F5la&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=27e842de-af31-43f9-8eb1-351a6825e28c.FCWHFUX9XC5B9GFF.SEARCH&ppt=sp&ppn=sp&ssid=xx2gej8tgg0000001779869867658&qH=756b67527696212d&ov_redirect=true&ov_redirect=true",
                platform: "flipkart",
                budget: "budget"
            },
            {
                name: "Forest Essentials Kashmiri Saffron & Neem Cleanser",
                brand: "Forest Essentials",
                price: "₹495",
                priceValue: 495,
                description: "Luxurious Ayurvedic cleanser with saffron and neem for radiant skin.",
                benefits: ["Ayurvedic", "Brightening", "Luxurious"],
                link: "https://www.nykaa.com/forest-essentials-delicate-facial-cleanser-kashmiri-saffron-neem-config/p/304703?productId=304703&skuId=304702&pps=1",
                platform: "nykaa",
                budget: "budget"
            }
        ],
        moisturizer: [
            {
                name: "CeraVe Daily Moisturizing Lotion",
                brand: "CeraVe",
                price: "₹1406",
                priceValue: 1406,
                description: "Lightweight lotion with ceramides and hyaluronic acid for all-day hydration.",
                benefits: ["24-hour hydration", "Ceramides", "Non-greasy"],
                link: "https://www.amazon.in/CeraVe-Moisturising-Cream-Jar-340g/dp/B07CH9XWHR/ref=sr_1_3_sspa?adgrpid=1318316051699253&dib=eyJ2IjoiMSJ9.8Qx4V3gagV72u8kgwKEZBEBkfvltcNS61857ibRnq_pdeG_g7fmH7ixVjovbM-4X7hPCW3OC_vUCxqtlxknwjAUqtCe9FhwdiZVlQ7limawvfgIl3-L5MncaE8L-NN9fa6AORN_FNShqg4L-2l8nCFHzKznE9Y1ixibdv67-tH7uwrVgYi9or9tInSkbIRbqpup10oSVy9gheAbkezZJTnCAWH9HVOz7kK64mB0j1tPOasFHWBo9Q5Ok9SfbD-qP0aDjDK00pirgXyOpM28I9EjQCvYsMndaC3TsKvP3HYo.c1S3hd_eywdmvhNrFX5jDz8tZzDKYuKCJn75awvqvIc&dib_tag=se&hvadid=82395024192468&hvbmt=bb&hvdev=c&hvlocphy=158348&hvnetw=o&hvqmt=b&hvtargid=kwd-82395637949578%3Aloc-90&hydadcr=22034_2354555&keywords=cera+ve+face+moisturizer&mcid=8c117d5c00c8315fbf8fbc454144eb25&qid=1779869964&refinements=p_123%3A236332&rnid=91049095031&sr=8-3-spons&aref=H4QBJC0wkK&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
                platform: "amazon",
                budget: "budget"
            },
            {
                name: "Plum Green Tea Renewed Clarity Night Gel",
                brand: "Plum",
                price: "506",
                priceValue: 506,
                description: "Lightweight gel moisturizer with green tea for balanced, healthy skin.",
                benefits: ["Lightweight", "Antioxidant-rich", "Vegan"],
                link: "https://www.amazon.in/Plum-Lightweight-absorbing-Acne-Prone-Combination/dp/B076D5V211/ref=sr_1_1?adgrpid=1318316049206037&dib=eyJ2IjoiMSJ9.8ayChLlQJfGrqT61CfbiiZ5NQCnH05aAAwUdONaCXSnavx2AJhDcG9M82z1xA0a8ezmfYNUn7fGRHeNFaC_S26B9yYn-PDd--xd7HcE5I5gsDKaL8ZeiOwMbbi3LWVDEfDodGkSvMQZZ3fH96MvTAWlrhDLIPwPYuBPFzkjQeAid-3wpOWDK-7MaSjFFG8XZA7GJS0H2D46ppXYHs1HOYjt2-1mMWcIlorZaGco8vYRn2ze8Y0eBpODv9D8b0j8_wkbD6gdXJ0XSzxoUN2rmhgS166jbQ2vOHApPwM-ERAE.IZ0m7sQV9ToXR5jshMtL46AbZAFRSsBuzpMPhnEABNU&dib_tag=se&hvadid=82395024192368&hvbmt=be&hvdev=c&hvlocphy=158348&hvnetw=o&hvqmt=e&hvtargid=kwd-82395633566766%3Aloc-90&hydadcr=22067_2354562&keywords=plum+green+renewed+clarity+night+gel&mcid=61656cd6eb5c3b5aac57075e196f6ec9&msclkid=0bbfa9b146121e8a8b96c3a7e31750cf&qid=1779868937&sr=8-1",
                platform: "amazon",
                budget: "budget"
            },
            {
                name: "Clinique Moisture Surge 100H",
                brand: "Clinique",
                price: "₹2250",
                priceValue: 2250,
                description: "Auto-replenishing hydrator that locks in moisture for 100 hours.",
                benefits: ["Long-lasting hydration", "Oil-free", "Aloe water"],
                link: "https://www.nykaa.com/clinique-moisture-surge-100h-auto-replenishing-hydrator/p/1129289?root=search&searchType=Popular+Products&suggestionType=product&ssp=2&tst=Clinique+Moisture+Surge+100h+Auto-replenishing+Hydrator+(Moisturizer)&searchItem=Clinique+Moisture+Surge+100h+Auto-replenishing+Hydrator+(Moisturizer)&sourcepage=product&searchRedirect=1&skuId=1129286&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=PerformanceMax_CuratedStore_1Day&gad_source=1&gad_campaignid=23471662972&gbraid=0AAAABBsUhjS9wiiwcOy8rGb_8HSHsPt69&gclid=CjwKCAjwrNrQBhBjEiwAoR4VO61fA3L8QAMjZycd1AB9Eozit5S_P8c2OTmQwJCYik5Yj7dRjUTpSxoCqqIQAvD_BwE",
                platform: "nykaa",
                budget: "Mid"
            }
        ],
        serum: [
            {
                name: "Minimalist Vitamin C 10% Face Serum",
                brand: "Minimalist",
                price: "₹299",
                priceValue: 299,
                description: "Brightening vitamin C serum that enhances natural glow and evens tone.",
                benefits: ["Brightens", "Evens tone", "Antioxidant"],
                link: "https://beminimalist.co/products/vitamin-c-ethyl-ascorbic-acid-10-acetyl-glucosamine-1?currency=INR&country=IN&variant=45154750103713&utm_source=bing&utm_medium=cpc&utm_campaign=Google%20Shopping&stkn=f4faea6d89b6&utm_source=bing&utm_medium=cpc&utm_campaign=524080209&utm_term=1324914317717131&utm_content=shopify_IN_5831331053729_45154750103713&msclkid=6066b204b98b1189ceb4d8121ded5c38",
                platform: "beminimalist",
                budget: "budget"
            },
            {
                name: "Dot & Key Vitamin C + E Super Bright Serum",
                brand: "Dot & Key",
                price: "₹556",
                priceValue: 556,
                description: "Powerful antioxidant serum with vitamin C and E for radiant skin.",
                benefits: ["Brightens", "Antioxidants", "Radiance"],
                link: "https://www.dotandkey.com/products/dot-key-10-vitamin-c-e-5-niacinamide-serum-for-glowing-skin-beginner-friendly?gad_campaignid=18108358972&gad_source=1&gadid=&gbraid=0AAAAAC-nk239lz51JaoQRFw5OfUr59vkK&gclid=CjwKCAjwrNrQBhBjEiwAoR4VO-rGTPKZhjwyXHMjKR3YHVBdkzkLFiRCSJIYjX7OYlBq30LsWGM0XhoC9jsQAvD_BwE&utm_campaign=18108354709&utm_content=&utm_medium=paid&utm_source=google&utm_term=",
                platform: "dotandkey",
                budget: "budget"
            },
            {
                name: "Estée Lauder Advanced Night Repair",
                brand: "Estée Lauder",
                price: "₹1250",
                priceValue: 1250,
                description: "Iconic serum that repairs and renews skin overnight for all skin types.",
                benefits: ["Repairs skin", "Reduces lines", "Strengthens barrier"],
                link: "https://www.nykaa.com/estee-lauder-advanced-night-repair-synchronized-multi-recovery-complex/p/833283",
                platform: "nykaa",
                budget: "Mid"
            }
        ]
    }
};

const aiMessages = {
    oily: {
        acne: "Your oily, acne-prone skin needs products that control sebum production while fighting breakouts. I've selected lightweight, non-comedogenic formulas with ingredients like salicylic acid and niacinamide to keep your skin clear and balanced.",
        aging: "For oily skin with anti-aging concerns, you need products that hydrate without adding oil while addressing fine lines. These selections include retinol alternatives and antioxidants that won't clog pores.",
        hydration: "Even oily skin needs hydration! I've chosen oil-free, water-based products with hyaluronic acid that provide moisture without making your skin greasy.",
        brightening: "To brighten oily skin, I've selected products with vitamin C and niacinamide that even out skin tone while controlling excess oil production.",
        texture: "For smoother texture and minimized pores, these products contain BHA and niacinamide to refine your skin's surface and reduce the appearance of large pores."
    },
    dry: {
        acne: "Dry, acne-prone skin is tricky! I've chosen gentle, hydrating products that won't strip your skin while still addressing breakouts with mild exfoliants.",
        aging: "Your dry skin needs rich hydration plus anti-aging ingredients. These products combine ceramides, peptides, and hyaluronic acid to plump and nourish mature skin.",
        hydration: "Deep hydration is key for dry skin! I've selected rich, nourishing products with ceramides and hyaluronic acid that lock in moisture all day long.",
        brightening: "To brighten dry skin, these products combine hydrating ingredients with vitamin C and gentle exfoliants that won't cause irritation.",
        texture: "For smoother, softer skin, I've chosen deeply moisturizing products with gentle exfoliants that improve texture without causing dryness."
    },
    combination: {
        acne: "Combination skin with acne needs balanced care. These products control oil in your T-zone while hydrating dry areas, with gentle acne-fighting ingredients.",
        aging: "For combination skin showing signs of aging, I've selected lightweight anti-aging products that won't make oily areas greasy or dry areas flaky.",
        hydration: "Balancing hydration for combination skin requires smart formulas. These products provide moisture where needed without overwhelming oily zones.",
        brightening: "To brighten combination skin, I've chosen products with vitamin C and niacinamide that even tone without disrupting your skin's balance.",
        texture: "For refined texture across combination skin, these products gently exfoliate and balance, minimizing pores in oily areas while smoothing dry patches."
    },
    sensitive: {
        acne: "Sensitive, acne-prone skin needs extra gentle care. I've selected fragrance-free, hypoallergenic products with mild ingredients that fight breakouts without irritation.",
        aging: "For sensitive skin with aging concerns, these products use gentle, proven ingredients like peptides and ceramides that strengthen skin without causing reactions.",
        hydration: "Sensitive skin needs soothing hydration. I've chosen fragrance-free, minimal-ingredient products that calm while deeply moisturizing.",
        brightening: "To brighten sensitive skin safely, these products use gentle vitamin C derivatives and niacinamide that won't trigger irritation.",
        texture: "For smoother sensitive skin, I've selected ultra-gentle products with calming ingredients that improve texture without causing redness or irritation."
    },
    normal: {
        acne: "Lucky you with normal skin! These products maintain your skin's balance while addressing occasional breakouts with effective yet gentle ingredients.",
        aging: "For normal skin wanting to prevent aging, I've chosen well-rounded products with antioxidants, peptides, and retinol alternatives.",
        hydration: "To maintain your normal skin's healthy balance, these products provide optimal hydration without being too heavy or too light.",
        brightening: "For radiant, even-toned normal skin, I've selected products with vitamin C and gentle exfoliants that enhance your natural glow.",
        texture: "To keep your normal skin smooth and refined, these products gently exfoliate and nourish, maintaining your skin's healthy texture."
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
});

function initializeQuiz() {
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleOptionSelection(this);
        });
    });

    const ctaButton = document.getElementById('get-recommendations');
    ctaButton.addEventListener('click', generateRecommendations);

    const retakeButton = document.getElementById('retake-quiz');
    retakeButton.addEventListener('click', resetQuiz);
}

function handleOptionSelection(button) {
    const question = button.getAttribute('data-question');
    const value = button.getAttribute('data-value');
    
    const questionCard = button.closest('.question-card');
    const allButtons = questionCard.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.classList.remove('selected'));
    
    button.classList.add('selected');
    
    userSelections[question] = value;
    
    checkAllQuestionsAnswered();
}

function checkAllQuestionsAnswered() {
    const ctaButton = document.getElementById('get-recommendations');
    const allAnswered = userSelections.skinType && userSelections.concern && userSelections.budget;
    
    ctaButton.disabled = !allAnswered;
}

function generateRecommendations() {
    const skinTypeProducts = productDatabase[userSelections.skinType];
    
    const filteredProducts = filterProductsByBudget(skinTypeProducts, userSelections.budget);
    
    const aiMessage = aiMessages[userSelections.skinType][userSelections.concern];
    
    displayResults(filteredProducts, aiMessage);
    
    document.getElementById('quiz-section').classList.remove('active');
    document.getElementById('results-section').classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterProductsByBudget(products, budget) {
    const filtered = {};
    
    for (const category in products) {
        filtered[category] = products[category].filter(product => {
            if (budget === 'budget') {
                // Budget: below ₹1000
                return product.priceValue < 1000;
            } else if (budget === 'mid') {
                // Mid-range: ₹1000 - ₹3000
                return product.priceValue >= 1000 && product.priceValue <= 3000;
            } else {
                // Luxury: above ₹3000
                return product.priceValue > 3000;
            }
        });
    }
    
    return filtered;
}

function displayResults(products, aiMessage) {
    const subtitle = document.getElementById('results-subtitle');
    subtitle.textContent = `Based on your ${userSelections.skinType} skin type and ${userSelections.concern} concerns`;
    
    document.getElementById('ai-message').textContent = aiMessage;
    
    const container = document.getElementById('recommendations-container');
    container.innerHTML = '';
    
    for (const category in products) {
        products[category].forEach(product => {
            const productCard = createProductCard(product, category);
            container.appendChild(productCard);
        });
    }
}

function createProductCard(product, category) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    const platformInfo = platforms[product.platform] || { name: product.platform, icon: '🛒' };
    
    card.innerHTML = `
        <span class="product-category">${categoryName}</span>
        <h3>${product.name}</h3>
        <p class="product-brand">${product.brand}</p>
        <p class="product-description">${product.description}</p>
        <div class="product-benefits">
            <h4>Key Benefits:</h4>
            <ul>
                ${product.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
        </div>
        <div class="product-footer">
            <div class="product-price">${product.price}</div>
            <div class="platform-badge" style="background-color: ${platformInfo.color}20; color: ${platformInfo.color};">
                <span>${platformInfo.icon}</span>
                <span>${platformInfo.name}</span>
            </div>
        </div>
        <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="buy-button">
            Buy on ${platformInfo.name} →
        </a>
    `;
    
    return card;
}

function resetQuiz() {
    userSelections.skinType = null;
    userSelections.concern = null;
    userSelections.budget = null;
    
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    document.getElementById('get-recommendations').disabled = true;
    
    document.getElementById('results-section').classList.remove('active');
    document.getElementById('quiz-section').classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


