module.exports = {
    QUESTION: [
        {
            'id': 1,
            'type': 'boolean',
            'question': 'Sexe ?',
            'choices': [
                {
                    'id': 1,
                    'choice': 'HOMME'
                },
                {
                    'id': 2,
                    'choice': 'FEMME'
                },
            ],
            'input': false
        },
        {
            'id': 2,
            'type': 'integer',
            'question': 'Quel âge as-tu ?',
            'choices': '',
            'input': true

        },
        {
            'id': 3,
            'type': 'String',
            'question': 'nationalite ?',
            'choices': '',
            'input': true
        },
        // {
        //     'id': 4,
        //     'type': 'Radio',
        //     'text': 'diplome',
        //     'input': false,
        //     'choices': [
        //         {
        //             'id': 1,
        //             'choice': 'DUT'
        //         },
        //         {
        //             'id': 2,
        //             'choice': 'DEUG'
        //         },
        //         {
        //             'id': 3,
        //             'choice': 'MASTER'
        //         },
        //         {
        //             'id': 4,
        //             'choice': 'ingénieur'
        //         },
        //         {
        //             'id': 5,
        //             'choice': 'DEUST'
        //         },
        //         {
        //             'id': 6,
        //             'choice': 'Doctorat'
        //         },
        //     ],
        // },
        // {
        // 	'id': 5,
        // 	'type': 'Checkbox',
        //     'text': 'activites',
        //     'choice1' : 'Sport',
        //     'choice2' : 'Voyage',
        //     'choice3' : 'Lecture',
        // }
    ]
}