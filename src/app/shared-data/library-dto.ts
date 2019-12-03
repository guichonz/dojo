import { DirectorDTO} from './director-dto';
import { AddressDTO } from './address-dto';
export class LibraryDTO {
    constructor(
        public id: number,
        public label: string,
        public type: string,
        public addressDTO: AddressDTO,
        public directorDTO: DirectorDTO) {}
}
