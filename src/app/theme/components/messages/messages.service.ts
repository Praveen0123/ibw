import {Injectable} from '@angular/core'

@Injectable()
export class MessagesService {

    private messages = [
        {
            name: 'Hours (5)',
            text: 'After you get up and running, you can place Font Awesome icons just about...',
            time: '1 min ago'
        },
        {
            name: 'Expenses (6)',
            text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
            time: '2 hrs ago'
        },
        {
            name: 'Return of Assets (1)',
            text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
            time: '10 hrs ago'
        }
    ];   


    private alerts = [
        {
            name: '5-1234-6',
            text: 'Action crossed due date, Please contact assigned staff',
            time: '1 min ago'
        },
        {
            name: '4-215-6',
            text: 'Asset return crossed due date, Please contact assigned individual',
            time: '2 hrs ago'
        },
        {
            name: '9-2596-2',
            text: 'Action crossed due date, Please contact assigned staff',
            time: '10 hrs ago'
        },
        {
            name: '8-5298-4',
            text: 'Asset return crossed due date, Please contact assigned individual',
            time: '1 day ago'
        }
    ];   

    private files = [        
        {
            text:'gradus.zip',
            size: '~6.2 MB',
            value: '47',
            color: 'primary'
        },
        {
            text: 'documentation.pdf',
            size: '~14.6 MB',
            value: '33',
            color: 'accent'
        },
        {
            text: 'wallpaper.jpg',
            size: '~558 KB',
            value: '60',
            color: 'warn'
        },
        {
            text: 'letter.doc',
            size: '~57 KB',
            value: '80',
            color: 'primary'
        },
        {
            text: 'azimuth.zip',
            size: '~10.2 MB',
            value: '55',
            color: 'warn'
        },
        {
            text: 'contacts.xlsx',
            size: '~96 KB',
            value: '75',
            color: 'accent'
        }
    ];

    private meetings = [
        {
            day: '09',
            month: 'May',
            title: 'Meeting with Bruno',
            text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
            color: 'danger'
        },       
        {
            day: '15',
            month: 'May',
            title: 'Training course',
            text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
            color: 'primary'
        },
        {
            day: '12',
            month: 'June',
            title: 'Dinner with Ashley',
            text: 'Curabitur rhoncus facilisis augue sed fringilla.',
            color: 'info'
        },
        {
            day: '14',
            month: 'June',
            title: 'Sport time',
            text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
            color: 'warning'
        },
        {
            day: '29',
            month: 'July',
            title: 'Birthday of Julia',
            text: 'Nam porttitor justo nec elit efficitur vestibulum.',
            color:'success'
        }
    ];

    public getMessages():Array<Object> {
        return this.messages;
    }

    public getAlerts():Array<Object> {
        return this.alerts;
    }


    

    public getFiles():Array<Object> {
        return this.files;
    }

    public getMeetings():Array<Object> {
        return this.meetings;
    }   

}