export class CreateUserDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly phoneNumber: string;
    readonly role: string;
}

export class UpdateDriverStatusDto {
    readonly driverStatus: "available" | "unavailable";
}
