import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departamento } from '../entities/departamentos';

@Injectable()
export class DepartamentosService {
  constructor(
    @InjectRepository(Departamento)
    private readonly departamentosRepository: Repository<Departamento>,
  ) {}

  findAll(): Promise<Departamento[]> {
    return this.departamentosRepository.find();
  }

  create(departamento: Partial<Departamento>): Promise<Departamento> {
    return this.departamentosRepository.save(departamento);
  }

  async delete(id: number): Promise<void> {
    await this.departamentosRepository.delete(id);
  }
}
