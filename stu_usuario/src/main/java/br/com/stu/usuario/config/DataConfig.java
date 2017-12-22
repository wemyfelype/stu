package br.com.stu.usuario.config;

import javax.sql.DataSource;

import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.SimpleDriverDataSource;

@Configuration
@MapperScan("br.com.stu.usuario.mapper")
public class DataConfig {

	@Bean
	public DataSource dataSource() {
		
		SimpleDriverDataSource dataSource = new SimpleDriverDataSource();
        dataSource.setDriverClass(org.postgresql.Driver.class);
        dataSource.setUrl("jdbc:postgresql://35.225.93.179:5432/stu");
        dataSource.setUsername("postgres");
        dataSource.setPassword("postgres");

        // create a table and populate some data
//        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
//        System.out.println("Creating tables");
//        jdbcTemplate.execute("drop table usuario if exists");
//        jdbcTemplate.execute("create table usuario(id serial, nome varchar(255)");
//        jdbcTemplate.update("INSERT INTO usuario(nome) values (?,)", "Mike");

        return dataSource;
	}
	
	@Bean
    public DataSourceTransactionManager transactionManager() {
        return new DataSourceTransactionManager(dataSource());
    }

    @Bean
    public SqlSessionFactoryBean sqlSessionFactory() throws Exception {
        SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource());
        sessionFactory.setTypeAliasesPackage("br.com.stu.usuario.domain");
        return sessionFactory;
    }
	
}
