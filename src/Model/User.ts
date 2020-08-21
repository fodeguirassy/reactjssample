
export class User {
    name: string
    company: string
    location: string
    pictureUrl: string
    position: string
    posts?: [Post]
    channels? : [Channel]

    constructor(aName: string, aCompany: string, aLocation: string, aPictureUrl: string, aPosition: string, posts?: [Post], channels?: [Channel] ) {
        this.name = aName
        this.company = aCompany
        this.location = aLocation
        this.pictureUrl = aPictureUrl
        this.position = aPosition
        this.posts = posts
    }
}

export class Post {
    owner: User
    content: string
    requestedSkills: Skill[]
    createdAt: Date

    constructor(aOwner: User, aContent: string, skills: Skill[], creationDate: Date) {
        this.owner = aOwner
        this.content = aContent
        this.requestedSkills = skills
        this.createdAt = creationDate
    }
}

export class Skill {
    title: string
    constructor(aTitle: string) {
        this.title = aTitle
    }
} 

export class Message {
    emitter: User
    content: string

    constructor(anEmitter: User, aContent: string) {
        this.emitter = anEmitter
        this.content = aContent
    }
}

export class Channel {
    initiator: User
    recipient: User
    messages: [Message]

    constructor(anInitiator: User, aRecipient: User, messages: [Message]) {
        this.initiator = anInitiator
        this.recipient = aRecipient
        this.messages = messages
    }
}

export let mockedSkills: Array<Skill> = [
    new Skill("Software Engineering"),
    new Skill("Electronics"),
    new Skill("Project Management"),
    new Skill("Human Resources"),
    new Skill("Sales Engineering"),
]

export let mockedUsers: Array<User> = [
    new User("Marco Garniga", "Renault", "Paris", "https://www.start-up.ma/wp-content/uploads/2018/05/Marco-Garniga-315x315.jpeg", "Sales Manager"),
    new User("Benoît Ferrer", "Renault", "Lisboa", "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg", "Software Engineer"),
    new User("Mireille Tecquel", "Renault", "Berlin", "https://i.pinimg.com/originals/de/64/80/de64801f0275c1ab2ea5a9e2bb3ce7bc.jpg", "Electronics Engineer"),
    new User("Isabella Magro", "Renault", "Milan", "https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg", "Human Resources"),
    new User("Youssef Shakur", "Renault", "London", "https://snusercontent.global.ssl.fastly.net/member-profile-full/46/4274246_8809836.jpg", "Software Engineer"),
    new User("Rebecca Reishman", "Renault", "Amsterdam", "https://www.secondcity.com/wp-content/uploads/2014/08/Quercioli_Dana_12.2012.jpg", "Sales Manager"),
]

export var mockedPost: Array<Post> = [
    new Post( mockedUsers[0], "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", [mockedSkills[0], mockedSkills[1], mockedSkills[2]], new Date('2020-08-25')),
    new Post( mockedUsers[1], "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", [mockedSkills[4], mockedSkills[1], mockedSkills[3]], new Date('2020-08-24')),
    new Post( mockedUsers[2], "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", [mockedSkills[2], mockedSkills[3], mockedSkills[2]], new Date('2020-08-23')),
    new Post( mockedUsers[3], "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", [mockedSkills[3], mockedSkills[4], mockedSkills[0]], new Date('2020-08-22')),
    new Post( mockedUsers[4], "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", [mockedSkills[0], mockedSkills[1], mockedSkills[2]], new Date('2020-08-21')),
    new Post( mockedUsers[5], "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", [mockedSkills[0], mockedSkills[1], mockedSkills[2]], new Date('2020-08-26')),
]

export var currentUser = mockedUsers[0]

