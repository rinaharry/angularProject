export const adminLteConf = {
    skin: 'green',
    layout: 'fixed',
    sidebarLeftMenu: [
        {
            label: 'MENU PRINCIPAL',
            separator: true
        },
        // {
        //     label: 'Départements',
        //     iconClasses: 'fa fa-list',
        //     children: [
        //         {
        //             label: 'Liste des départements',
        //             route: 'dashboard/departments'
        //         },
        //         {
        //             label: 'Ajouter un départment',
        //             route: 'dashboard/departments/add'
        //         }
        //     ]
        // },
        // {
        //     label: 'Postes',
        //     iconClasses: 'fa fa-list',
        //     children: [
        //         {
        //             label: 'Liste des postes',
        //             route: 'dashboard/positions'
        //         },
        //         {
        //             label: 'Ajouter une poste',
        //             route: 'dashboard/positions/add'
        //         }
        //     ]
        // },
        {
            label: 'Collaborateurs',
            iconClasses: 'fa fa-users',
            children: [
                {
                    label: 'Liste des collaborateurs',
                    route: 'dashboard/users'
                },
                // {
                //     label: 'Ajouter un collaborateur',
                //     route: 'dashboard/users/add'
                // }
            ]
        },
        // {
        //     label: 'Pointage',
        //     iconClasses: 'fa fa-clock-o',
        //     children: [
        //         {
        //             label: 'Aujourd\'hui',
        //             route: 'dashboard/timelog/today'
        //         },
        //         {
        //             label: 'Hier',
        //             route: 'dashboard/timelog/yesterday'
        //         },
        //         {
        //             label: 'Par date',
        //             route: 'dashboard/timelog/per-date'
        //         },
        //         {
        //             label: 'Personnalisé',
        //             route: 'dashboard/timelog/custom'
        //         }
        //     ]
        // }
    ]
};
