export const theme = {
    styles: {
        a: {
            fontSize: '32px',
            fontFamily: 'heading',
            fontWeight: 'heading',
            color: 'primary',
            mt: 4,
            mb: 2,
        },

        li: {
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
            alignItems: ['center'],

            justifyContent: 'space-between',
            '&:not(:last-child)': {
                mb: [25],
            },
            'div': {
                flex: '1',
            },
            '.details': {
                flex: '2',
                mb: [25, 15, 0],
                mt: [15, 15, 0],
            },
            '.save-actions': {
                'button': {
                    my: ['5px'],
                }
            },

            '&.movie-single': {

                background: 'card',
                p: 25,
                borderRadius: 5,

            },


        },
        div: {},
        ol: {
            listStyleType: 'decimal',
            p: 0,
        }


    },
    images: {
        small: {
            width: 15,
            height: 15,
            ml: '5px',
            alignSelf: 'center',

        },
        medium: {

            height: [150],


        },
    },
    fonts: {
        body: 'system-ui, sans-serif',
        heading: '"Avenir Next", sans-serif',
        monospace: 'Menlo, monospace',
    },
    colors: {
        text: '#000',
        background: '#c8c8c4',
        primary: '#FFC901',
        card: '#8c8a8a'
    },
    forms: {
        label: {
            my: '5px',
        },
    },
    buttons: {
        primary: {
            background: 'black',
            mx: ['5px', '0'],
            '&:hover': {
                bg: 'primary',
                cursor: 'pointer',
                color: 'black',

            }
        },
        menu: {
            color: 'white',
            display: ['block', 'none']
        }
    },
    text: {
        primary: {
            color: 'white',
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',


            fontSize: ['20px', '32px', '44px'],
        },
        secondary: {
            color: 'black',
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',

            pb: 25,
            fontSize: ['16px', '26px', '36px'],
        },
    },
    layout: {
        container: {
            px: ['10px', '50px', '0'],
            '&.search-container': {
                p: 0,
                mx: 0,
                width: ['100%', '45%'],
            },
        },
        wrapper: {
            maxWidth: ['80%', '80%', '80%'],
            bg: 'white',
            px: 0,

        },
        primary: {

            bg: 'white',
            p: 25,

        },
        header: {
            bg: 'black',
            p: ['25px']

        }
    },

    nav: {
        fontWeight: 'bold',
        color: 'white',
        textDecoration: 'none',

    }

}
